import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header";
import Cards from "../commonComponents/Cards";
import { REACT_APP_API_KEY } from "../apiKey";
import "./index.css";

const Search = () => {
  const { query } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  console.log(query);

  const fetchData = async () => {
    try {
      const apiKey = REACT_APP_API_KEY;
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1`;
      const response = await fetch(url);
      const data = await response.json();
      setSearchResults(data.results);
      console.log(data.results);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [query]);

  return (
    <div className="search-movie-container">
      <Header />
      <Cards movies={searchResults} />
    </div>
  );
};

export default Search;
