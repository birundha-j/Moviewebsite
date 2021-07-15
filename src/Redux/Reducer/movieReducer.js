import { GET_MOVIELIST } from '../Utils/constant';

const initialState = {
    getMoviesList: []

}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_MOVIELIST:
            return {
                ...state,
                getMoviesList: action.payload
            }
        default:
            return state;
    }
}