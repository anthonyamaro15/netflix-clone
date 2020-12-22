import React from 'react';
import {  render, screen, jest } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";

import MovieContent from '../MovieContent';

describe("renders MovieContent without crashing", () => {

   test("renders MovieContent", () => {
     const nextPage = () => "";
      <Router>
         <MovieContent popular={[]} nextPage={nextPage} />
      </Router>
   })
})