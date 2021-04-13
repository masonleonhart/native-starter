import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddlware from "redux-saga";
import logger from "redux-logger";

import rootReducer from "./assets/redux/reducers/_root.reducer";
import rootSaga from "./assets/redux/sagas/_root.saga";

import Header from "./assets/components/Header/Header";

const sagaMiddleware = createSagaMiddlware();

const middlewareList =
  process.env.NODE_ENV === "development"
    ? [sagaMiddleware, logger]
    : [sagaMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middlewareList));

sagaMiddleware.run(rootSaga);

export default function App() {
  return (
    <Provider store={store}>
      <Header />
    </Provider>
  );
}
