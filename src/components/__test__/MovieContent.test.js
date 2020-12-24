import React from 'react';
import {  render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";

import MovieContent from '../MovieContent';

describe("renders MovieContent without crashing", () => {

   test("renders MovieContent", async () => {
     const nextPage = () => "";
     render(
         <Router>
            <MovieContent popular={[]} nextPage={nextPage} />
         </Router>
     )
   });

   it('check for elements to be in the document', () => {
     const nextPage = () => "";
     render(
         <Router>
            <MovieContent popular={[]} nextPage={nextPage} />
         </Router>
     )

      expect(screen.getByRole('heading', { name: /most popular/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /see more/i })).toBeInTheDocument();
   })
})