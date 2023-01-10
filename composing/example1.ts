import { takeEvery } from "npm:redux-saga/effects";

import { ACTION, init } from "../store.ts";

function* handler() {
  console.log("run saga");
}
function* mainSaga() {
  yield takeEvery(ACTION.type, handler);
}

const { addSaga, store } = init();

addSaga(mainSaga);
store.dispatch(ACTION);
