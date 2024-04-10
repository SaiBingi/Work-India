import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header";
import { REACT_APP_API_KEY } from "../apiKey";
import "./index.css";

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [castDetails, setCastDetails] = useState([]);
  const apiKey = REACT_APP_API_KEY;

  const fetchMovieDetails = async () => {
    try {
      const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;
      const response = await fetch(url);
      const data = await response.json();
      setMovieDetails(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  const fetchMovieCastDetails = async () => {
    try {
      const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`;
      const response = await fetch(url);
      const data = await response.json();
      const { cast } = data;
      setCastDetails(cast);
      console.log(cast);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  useEffect(() => {
    fetchMovieDetails();
    fetchMovieCastDetails();
  }, [id]);

  const formatDate = (inputDate) => {
    const date = new Date(inputDate);
    const formattedDate = date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
    return formattedDate;
  };

  return (
    <>
      <Header />
      <div className="movie-details-container">
        <div className="movie-card">
          <div className="left-side-con">
            <div className="first-con">
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                  className="movie-detail-poster"
                  alt="poster"
                />
              </div>
              <div className="first-con-desc">
                <h1 className="get-movie-title">{movieDetails.title}</h1>
                <p>Rating: {movieDetails.vote_average}</p>
                <div className="con">
                  <p>{movieDetails.runtime} min</p>
                  {movieDetails.genres &&
                    movieDetails.genres.map((each) => (
                      <p key={each.id} className="genre">
                        {each.name}
                      </p>
                    ))}
                </div>
                <p>
                  <span className="release-date">Release Date: </span>&nbsp;
                  {formatDate(movieDetails.release_date)}
                </p>
              </div>
            </div>
            <div className="second-con">
              <h1>Overview</h1>
              <p className="overview">{movieDetails.overview}</p>
            </div>
          </div>
          <div className="right-side-con">
            <img
              src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`}
              alt="backdrop-poster"
              className="backdrop-poster"
            />
          </div>
        </div>
        <div className="bottom-con">
          <h1 className="cast-heading">Cast</h1>
          <div className="cards-container">
            {castDetails.map((each) => (
              <div className="card-item" key={each.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${each.profile_path}`}
                  className="cast-img"
                  alt="cast-profile-img"
                />
                <div>
                  <h1 className="cast-title">{each.name}</h1>
                  <p className="cast-desc">Character: {each.character}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
