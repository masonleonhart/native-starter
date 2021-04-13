import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* fetchListSaga() {
  try {
    const response = yield axios.get("http://192.168.1.110:5000/api/list/");
    yield put({ type: "SET_LIST", payload: response.data })
  } catch (error) {
    console.log("error in fetching list", error);
  }
}

export default function* listSaga() {
  yield takeLatest("FETCH_LIST", fetchListSaga);
}
