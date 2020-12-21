import "mutationobserver-shim"
import React from 'react';
import { fireEvent, render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";
import Login from '../Login';

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

   })
})