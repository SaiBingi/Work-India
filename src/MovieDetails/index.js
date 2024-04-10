import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header";
import { REACT_APP_API_KEY } from "../apiKey";
import "./index.css";

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
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

  useEffect(() => {
    fetchMovieDetails();
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
          <div>
            <div className="first-con">
              <img
                src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                className="movie-detail-poster"
                alt="poster"
              />
              <div className="first-con-desc">
                <h1>{movieDetails.title}</h1>
                <p>Rating: {movieDetails.vote_average}</p>
                <div className="con">
                  <p>{movieDetails.runtime} min</p>
                  {movieDetails.genres &&
                    movieDetails.genres.map((each) => (
                      <p key={each.id}>{each.name}</p>
                    ))}
                </div>
                <p>
                  <span className="strike">Rele</span>ase Date: &nbsp;
                  {formatDate(movieDetails.release_date)}
                </p>
              </div>
            </div>
            <div className="second-con">
              <h1>Overview</h1>
              <p className="overview">{movieDetails.overview}</p>
            </div>
          </div>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`}
            className="movie-detail-backdrop-poster"
            alt="backdrop-poster"
          />
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
