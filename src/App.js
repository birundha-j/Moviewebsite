import { useEffect } from 'react';
import { useDispatch, connect, useSelector } from "react-redux";
import { getMoviesList } from './Redux/Action/movieAction';
import './App.css';


function App(props) {
  const dispatch = useDispatch();
const number=useSelector((state)=>state.MovieReducer.getMoviesList)
  useEffect(() => {
    dispatch(getMoviesList())
  }, [])

  useEffect(() => {
    console.log(props.getMoviesList, "getMoviesList")
  }, [props.getMoviesList])

  return (
    <div className="App">
      test
    </div>
  );
}

// const mapStateToProps = (state) =>

// (
//   console.log(state, "state"), {
//     getMoviesList: state.MovieReducer.getMoviesList
//   });

// const mapDispatchToProps = (dispatch) => {
//   return (
//     dispatch(getMoviesList())
//   )
// }

export default App;
