import { call, put, takeLatest } from "redux-saga/effects";
import { searchPhotos } from "../../api/unsplash";

import { FETCH_IMAGES } from "./constants";
import { fetchedImages, fetchingImagesError } from "./actions";

function* fetchImages(action) {
  try {
    const { data } = yield call(searchPhotos, action.term);
    yield put(fetchedImages(data.results));
  } catch (e) {
    yield put(fetchingImagesError(e.response.data.errors));
  }
}

function* searchBarSaga() {
  yield takeLatest(FETCH_IMAGES, fetchImages);
}

export default searchBarSaga;
