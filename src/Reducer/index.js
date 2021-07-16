import { combineReducers } from "redux";
import MovieReducer from './movieReducer';

const rootReducer =  combineReducers({
    movieList: MovieReducer
}) 

export default rootReducer;