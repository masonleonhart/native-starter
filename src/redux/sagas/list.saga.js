import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

// Set the IP and PORT from where you are hosting the server
// Default PORT for express server is 5000

// serverAddress is synonymous with localhost:5000

const serverIP = '192.168.1.110';
const serverPORT = '5000';
const serverAddress = `http://${serverIP}:${serverPORT}`;

function* addListEntrySaga(action) {
  try {
    yield axios.post(`${serverAddress}/api/list/`, { content: action.payload });
    yield put({ type: "FETCH_LIST" });
  } catch (error) {
    console.log("error in adding new list entry", error);
  }
}

function* fetchListSaga() {
  try {
    const response = yield axios.get(`${serverAddress}/api/list/`);
    yield put({ type: "SET_LIST", payload: response.data });
  } catch (error) {
    console.log("error in fetching list", error);
  }
}

export default function* listSaga() {
  yield takeLatest("ADD_LIST_ENTRY", addListEntrySaga);
  yield takeLatest("FETCH_LIST", fetchListSaga);
}
