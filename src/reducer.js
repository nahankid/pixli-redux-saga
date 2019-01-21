import { combineReducers } from "redux";
import searchBarReducer from "./components/SearchBar/reducer";
import imageListReducer from "./components/ImageList/reducer";

const reducers = combineReducers({ searchBarReducer, imageListReducer });

export default reducers;
