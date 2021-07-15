import { GET_MOVIELIST } from '../Utils/constant';

export const getMoviesList = () => async dispatch => {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    };
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1", requestOptions)
        .then(data => {
            alert("test")
            dispatch({ type: GET_MOVIELIST, payload: data })
        });
}
