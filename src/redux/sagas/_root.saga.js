import { all } from "redux-saga/effects";
import listSaga from "./list.saga";

export default function* rootSaga() {
  yield all([listSaga()]);
}
