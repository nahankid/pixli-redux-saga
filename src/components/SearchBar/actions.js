import {
  FETCH_IMAGES,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_ERROR
} from "./constants";

export const fetchImages = term => {
  return {
    type: FETCH_IMAGES,
    term
  };
};

export const fetchedImages = images => {
  return {
    type: FETCH_IMAGES_SUCCESS,
    images
  };
};
export const fetchingImagesError = error => {
  return {
    type: FETCH_IMAGES_ERROR,
    error
  };
};
