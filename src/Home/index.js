import { useState, useEffect } from "react";
import Header from "../Header";
// import dotenv from 'dotenv';
import Cards from '../commonComponents/Cards'
import "./index.css";
import { REACT_APP_API_KEY } from "../apiKey";

// dotenv.config();


const Home = () => {
    const apiKey = REACT_APP_API_KEY
    // console.log(apiKey)

    const [movies, setMovies] = useState([]);

    const fetchData = async () => { 
      try {
        let url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
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
    <div className="home-container">
      <Header />
      <Cards movies={movies} />
    </div>
  );
};

export default Home;
