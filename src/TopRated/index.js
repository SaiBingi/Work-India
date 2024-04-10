import { useState, useEffect } from "react";
import Header from "../Header";
// import dotenv from 'dotenv';
import Cards from '../commonComponents/Cards'
import { REACT_APP_API_KEY } from "../apiKey";
import "./index.css";

// dotenv.config();

const TopRated = () => {
    const apiKey = REACT_APP_API_KEY
    // console.log(apiKey)

    const [movies, setMovies] = useState([]);

    const fetchData = async () => { 
        try {
          let url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;
          
          const response = await fetch(url);
          const data = await response.json();
          const {results} = data;
          console.log(results);
          setMovies(results);
        } catch (error) {
          console.log("Error:", error);
        }  
    };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="top-rated-container">
      <Header />
      <Cards movies={movies} />
    </div>
  );
};

export default TopRated;
