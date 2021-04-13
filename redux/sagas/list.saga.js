import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* fetchListSaga() {
  try {
    const response = axios.get("http://localhost:5000/api/list/");
    console.log(response.data)
  } catch (error) {
    console.log("error in fetching list", error);
  }
}

export default function* listSaga() {
  yield takeLatest("FETCH_LIST", fetchListSaga);
}
