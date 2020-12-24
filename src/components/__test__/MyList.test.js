import React from 'react';
import {  render, screen, jest } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { rootReducer } from "../../reducers/index";
import MyList from '../MyList';

const store = createStore(rootReducer, applyMiddleware(thunk));

describe("renders MyList without crashing", () => {

   it("renders MyList", async () => {
      render(
         <Provider store={store}>
            <Router>
               <MyList />
            </Router>
         </Provider>
      )
   });

   it('displays title when list is empty', () => {
      render(
         <Provider store={store}>
            <Router>
               <MyList />
            </Router>
         </Provider>
      )
      expect(screen.getByText(/list empty/i)).toBeInTheDocument();
   });
});