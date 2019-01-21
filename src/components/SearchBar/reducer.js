import { fromJS } from "immutable";

import { FETCH_IMAGES } from "./constants";

const initialState = fromJS({
  term: false
});

const searchBarReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IMAGES:
      return state.set("term", action.term);

    default:
      return state;
  }
};

export default searchBarReducer;
