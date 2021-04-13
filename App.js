import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddlware from "redux-saga";
import logger from "redux-logger";

// Redux 

import listReducer from "./assets/redux/reducers/list.reducer";
import rootSaga from "./assets/redux/sagas/_root.saga";

// Components

import Header from "./assets/components/Header/Header";

// React middleware

const sagaMiddleware = createSagaMiddlware();

const middlewareList =
  process.env.NODE_ENV === "development"
    ? [sagaMiddleware, logger]
    : [sagaMiddleware];

const store = createStore(listReducer, applyMiddleware(...middlewareList));

sagaMiddleware.run(rootSaga);

export default function App() {
  return (
    <Provider store={store}>
      <Header />
    </Provider>
  );
}
