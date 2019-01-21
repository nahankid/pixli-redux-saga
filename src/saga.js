import { fork } from "redux-saga/effects";
import searchBarSaga from "./components/SearchBar/saga";

function* saga() {
  yield fork(searchBarSaga);
}

export default saga;
