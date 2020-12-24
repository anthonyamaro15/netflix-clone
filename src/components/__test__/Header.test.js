import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import {  render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from '../Header';
import { getMovies } from '../apiRequest';

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

const server = setupServer(
   rest.get('https://api.themoviedb.org/3/movie/', (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(movie));
   })
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

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

   it("displays movie data", async () => {
      render(
         <Router>
            <Header popular={movie} />
         </Router>
      );
      const { data } = await getMovies();
      await expect(data).toHaveLength(1);
   });
})