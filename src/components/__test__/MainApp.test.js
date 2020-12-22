import React from 'react';
import {  render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { rootReducer } from "../../reducers/index";

const store = createStore(rootReducer, applyMiddleware(thunk));

import MainApp from '../MainApp';

describe("MainApp render without problems", () => {
   test("renders MainApp component", () => {
      render(
         <Provider store={store}>
            <Router>
               <MainApp />
            </Router>
         </Provider>
      )
   })
});
