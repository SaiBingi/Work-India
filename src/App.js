import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import TopRated from "./TopRated";
import UpComing from './UpComing';
import Search from "./Search";
import MovieDetails from "./MovieDetails";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top-rated" element={<TopRated />} />
        <Route path="/upcoming" element={<UpComing />} />
        <Route path="/search/:query" element={<Search />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
