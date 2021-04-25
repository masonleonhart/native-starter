import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { createStore, applyMiddleware } from "redux";
import { Provider as StoreProvider } from "react-redux";
import createSagaMiddlware from "redux-saga";
import logger from "redux-logger";

// Redux

import listReducer from "./src/redux/reducers/list.reducer";
import rootSaga from "./src/redux/sagas/_root.saga";

// Components

import Header from "./src/components/Header/Header";
import Main from "./src/components/Main/Main";

// Redux middleware

const sagaMiddleware = createSagaMiddlware();

const middlewareList =
  process.env.NODE_ENV === "development"
    ? [sagaMiddleware, logger]
    : [sagaMiddleware];

const store = createStore(listReducer, applyMiddleware(...middlewareList));

sagaMiddleware.run(rootSaga);

export default function App() {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <Header />
        <Main />
      </PaperProvider>
    </StoreProvider>
  );
}
