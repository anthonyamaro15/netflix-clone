import React from 'react';
import {  render, screen, jest } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { rootReducer } from "../../reducers/index";

import SingleMovieInfo from '../SingleMovieInfo';

const store = createStore(rootReducer, applyMiddleware(thunk));


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

describe("renders SingleMovInfo", () => {
   it("renders without crashing", () => {
      render(
         <Provider store={store}>
            <Router>
               <SingleMovieInfo
                  popular={[]}
                  playingMovie={[]}
                  latestRated={[]}
                  tvPopular={[]}
                  movieSearchResponse={[]}
                  favoriteList={[]}
                  getFavoriteData={[]}
               />
            </Router>         
         </Provider>
      );
   });

   it("displays loading message in screen", () => {
      render(
         <Provider store={store}>
            <Router>
               <SingleMovieInfo
                  popular={[]}
                  playingMovie={[]}
                  latestRated={[]}
                  tvPopular={[]}
                  movieSearchResponse={[]}
                  favoriteList={[]}
                  getFavoriteData={[]}
               />
            </Router>         
         </Provider>
      );
      
      expect(screen.getByText(/loading.../i)).toBeInTheDocument();
   })
})