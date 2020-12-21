import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";

import App from './App';


describe("Renders App component without errors", () => {
   test('renders App Properly', () => {
      <Router>
         <App />   
      </Router>

   });
})

