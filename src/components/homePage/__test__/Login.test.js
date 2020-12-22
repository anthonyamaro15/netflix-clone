import "mutationobserver-shim"
import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { fireEvent, render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";
import Login from '../Login';

import { loginReq } from '../apiRequest/index';
import { serverUrl } from '../../../envVariables/index';
const userInfo = {email: "exmaple@gmail.com", password: "pass12"};

const server = setupServer(
   rest.post(`${serverUrl}/api/auth/login`, (req, res, ctx) => {
      return res(ctx.status(201), ctx.json({id: 1, token: "exampletoken"}));
   })
)

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe("Login form working properly", () => {
   test("renders Form", () => {
      <Router>
          <Login />
      </Router>
   });

   test("check for inputs receiving expected data", async () => {
      render(
         <Router>
            <Login />
         </Router>
      );

      const loginHeader = screen.getByRole("heading", { name: /log in/i});
      const email = screen.getByPlaceholderText(/email/i);
      const password = screen.getByPlaceholderText(/password/i);
      const button = screen.getByRole("button", {name: /log in/i });

      expect(loginHeader).toBeInTheDocument();
      fireEvent.input(email, { target: { value: "example@gmail.com" }});
      fireEvent.input(password, { target: { value: "password" }});

      
      fireEvent.change(button);
      cleanup();

   });

   test("check for expected data after user logs in", async () => {
      const { data } = await loginReq({email: "exmaple@gmail.com", password: "pass12"});
      expect(data.token.length > 0);
   });

   test("check for error messge when entering the wrong email/password", async () => {
      server.use(
         rest.post(`${process.env.REACT_APP_API_SERVER_URL}/api/auth/login`, (req, res, ctx) => {
            return res(ctx.status(500));
         })
      )

      await expect(loginReq(userInfo)).rejects.toThrow("500");
   })
})