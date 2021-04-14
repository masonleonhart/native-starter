import { actionChannel, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

// A top level file, env.js, that is storing our constant enviornment variables

// const variables = {
//   SERVER_IPV4_ADDRESS: "192.168.X.X" <= fill in the IPV4 address from the machine where
// };                                        the server is being hosted from
//
// export default variables;

import variables from "../../../env.js";

const serverIP = `http://${variables.SERVER_IPV4_ADDRESS}:5000`;

function* addListEntrySaga(action) {
  try {
    yield axios.post(`${serverIP}/api/list/`, { content: action.payload });
    yield put({ type: "FETCH_LIST" });
  } catch (error) {
    console.log("error in adding new list entry", error);
  }
}

function* fetchListSaga() {
  try {
    const response = yield axios.get(`${serverIP}/api/list/`);
    yield put({ type: "SET_LIST", payload: response.data });
  } catch (error) {
    console.log("error in fetching list", error);
  }
}

export default function* listSaga() {
  yield takeLatest("ADD_LIST_ENTRY", addListEntrySaga);
  yield takeLatest("FETCH_LIST", fetchListSaga);
}
