import react, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Back from './Images/backbutton.png'
import Modal from './model';
import useModal from './usemodel';

export default function App() {

  const movieList = useSelector((state) => {
    return state.movieList
  })
  const [showData, setShowData] = useState([])
  const [specificMovie, setSpecificMovie] = useState(false)
  const [movieDetails, setMoviewDetails] = useState({})
  const [showStar, setShowStar] = useState([])
  const [loader, setLoader] = useState(true)
  const { isShowing, toggle } = useModal();
  const [selectMovieList, setSelectMovieList] = useState([])
  useEffect(() => {
    setShowData(movieList?.data?.results)

  }, [movieList])

  console.log(showData, "movieList")


  useEffect(() => {
    demoAsyncCall().then(() => setLoader(false))
  }, [])

  function demoAsyncCall() {
    return new Promise((resolve) => setTimeout(() => resolve(), 1000));
  }


  const viewDetails = useCallback((data) => {
    setMoviewDetails(data)
    setSpecificMovie(true)
  }, [specificMovie, movieDetails])

  const changeAddStar = (data, id) => {
    if (!showStar.includes(id)) {
      selectMovieList.push(data)
      setShowStar([...showStar, id])
    } else {
      let filterList = selectMovieList.filter((li) => li !== data)
      let showList = showStar.filter((it) => it !== id)
      setSelectMovieList(filterList)
      setShowStar(showList)
    }
  }

  const changeRemoveStar = useCallback((data, id) => {
    if (id > -2) {
      showStar.splice(id, 0);
    }
    setShowStar([...showStar]);
    const reducedArr = selectMovieList.filter((item, itemIndex) => {
      return itemIndex !== id
    })
    setSelectMovieList(reducedArr)
  }, [showStar, selectMovieList])

  console.log(showStar, selectMovieList, "est")

  return (
    <div className="masterContainer" >
      {loader && <div className="loader"></div>}
      <div>
        <div className="websiteHeading">Popular Movie Website</div>
      </div>
      <div className="favoritsList">
        {specificMovie === false && <div className="favoritesMovies" onClick={toggle}>
          <div>Favorites</div>
          <div>{showStar.length}</div>
        </div>}
        <Modal
          isShowing={isShowing}
          hide={toggle}
          selectMovieList={selectMovieList}
        />
      </div>
      {specificMovie === false &&
        <div className="container">
          <>
            {showData && showData.map((data, index) => {
              return (
                <div className="imageViewContaner">
                  <div className="imageText">
                    <img src={"https://image.tmdb.org/t/p/original" + data.poster_path} className="imageView" />
                    <div className="img__description">
                      <div className="viewDetails" onClick={() => viewDetails(data)}>View Details</div>
                    </div>
                  </div>
                  <div className="moviesInstruct">
                    <div className="moviesBar">
                      <div className="movietitleView">{data.title}</div>
                      <div className="releaseYear">{new Date(data.release_date).getFullYear()}</div>
                    </div>
                    <div className="movieStar">
                      <div onClick={() => changeAddStar(data, index)} className={`${showStar.includes(index) ? "fillStar" : "emptyStar"}`}>
                        {showStar.includes(index) ? "★" : "☆"}</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </>
        </div>
      }
      {specificMovie &&
        <div className="specificMovieContainer">

          <div>
            <img onClick={() => setSpecificMovie(false)} src={Back} className="backBtnView" />
            <div className="movieDetails">
              <img src={"https://image.tmdb.org/t/p/original" + movieDetails.poster_path} className="singleimageView" />
              <div className="movieInstruction">
                <div className="movieName">{movieDetails.title}</div>
                <div className="movieVoterange">View Rating : {" " + movieDetails.vote_average}</div>
                <div className="movieVoterange">language    :{movieDetails.original_language === "en" ? "  English" : null}</div>
                <div className="movieVoterange">Release Year : {" " + new Date(movieDetails.release_date).getFullYear()}</div>
                <div>
                  <div className="movieVoterange">Description :</div>
                  <div className="titleOverview">{movieDetails.overview}</div>
                </div>

              </div>
            </div>
          </div>
        </div>
      }



    </div>
  )
}
