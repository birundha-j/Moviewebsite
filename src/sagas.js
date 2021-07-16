import { put, call } from "@redux-saga/core/effects";
import Axios from 'axios'

export function* watchGetUsers() {
    const url = "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1";
    const result = yield call(Axios.get, url)
    yield put({ type: "GET_MOVIE_LIST", payload: result })
}