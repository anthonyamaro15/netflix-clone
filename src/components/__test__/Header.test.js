import React from 'react';
import {  render, screen, jest } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";

import Header from '../Header';

const movie = [
   {
      backdrop_path: "/tYkMtYPNpUdLdzGDUTC5atyMh9X.jpg",
      poster_path: "/zeD4PabP6099gpE0STWJrJrCBCs.jpg",
      original_title: "Honest Thief",
      original_name: '',
      overview: "A bank robber tries to turn himself in because he's falling in love and wants to live an honest life.",
      id: 4343
   }
];

describe("Renders Header", () => {
   it("renders header wihtout crashing", () => {
      render(
         <Router>
            <Header popular={[]} />
         </Router>
      )
   });

   it("displays loading message when there is no data", () => {
      render(
         <Router>
            <Header popular={[]} />
         </Router>
      )

      expect(screen.getByText(/loading.../i)).toBeInTheDocument();
   });
})