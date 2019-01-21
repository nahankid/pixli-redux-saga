import { fromJS } from "immutable";

import {
  FETCH_IMAGES,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_ERROR
} from "../SearchBar/constants";

const initialState = fromJS({
  loading: false,
  error: false,
  term: false,
  images: false
});

const imageListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IMAGES:
      return state
        .set("loading", true)
        .set("error", false)
        .set("term", action.term);

    case FETCH_IMAGES_SUCCESS:
      return state
        .set("loading", false)
        .set("error", false)
        .set("images", action.images);

    case FETCH_IMAGES_ERROR:
      return state.set("loading", false).set("error", action.error);

    default:
      return state;
  }
};

export default imageListReducer;
