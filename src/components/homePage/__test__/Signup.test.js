import "mutationobserver-shim"
import React from 'react';
import {  render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";

import Signup from '../Signup';

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

   })
})