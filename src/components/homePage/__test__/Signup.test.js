import "mutationobserver-shim"
import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import {  render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";

import Signup from '../Signup';
import { signupRequest } from '../apiRequest';
import { serverUrl } from '../../../envVariables';

const userInfo = { 
   username: "test", 
   email: "test@gmail.com", 
   password: 'password' 
}

const server =  setupServer(
   rest.post(`${serverUrl}/api/auth/register`, (req, res, ctx) => {
      return res(ctx.status(201));
   })
)

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());


describe("Signup form working properly", () => {
   test("renders Form", () => {
      render(
         <Router>
            <Signup />
         </Router>
      );
     
   });

   test("check for inputs receiving the exptected data", () => {
      render(
         <Router>
            <Signup />
         </Router>
      );

      const signupHeader = screen.getByRole("heading", { name: /sign up/i });
      const username = screen.getByPlaceholderText(/username/i);
      const email = screen.getByPlaceholderText(/email/i);
      // const password = screen.getByPlaceholderText(/password/i);
      const confirmPassword = screen.getAllByPlaceholderText(/password/i);

      expect(signupHeader).toBeInTheDocument();
      expect(username).toBeInTheDocument();
      expect(email).toBeInTheDocument();
      expect(confirmPassword[0]).toBeInTheDocument();
      expect(confirmPassword[1]).toBeInTheDocument();

   });

   test('check for expected status code after user registers', async () => {
      const { status } = await signupRequest(userInfo);
      expect(status).toBe(201);
   });

   test("check for errors when user enters an existing email", async () => {
      server.use(
         rest.post(`${serverUrl}/api/auth/register`,(req, res, ctx) => {
            return res(ctx.status(500));
         })
      );

      await expect(signupRequest(userInfo)).rejects.toThrow("500");
   })
})