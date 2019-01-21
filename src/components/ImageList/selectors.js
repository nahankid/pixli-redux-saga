import { createSelector } from "reselect";

const getImages = state => state.imageListReducer;

export const selectImages = () =>
  createSelector(
    getImages,
    state => state.toJS()
  );
