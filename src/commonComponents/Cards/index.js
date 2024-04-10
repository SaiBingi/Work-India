import { NavLink } from 'react-router-dom';
import './index.css';

const Cards = props => {
    const {movies} = props;
    return (
        <div className='cards'>
            {movies.map((movie, index) => (
                <NavLink to={`/movie/${movie.id}`} key={index} className='card-link'>
                <div className='card'>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="poster-img" alt="poster" />
                    <p className='title'>{movie.title}</p>
                    <p className='rating'>Rating: {movie.vote_average}</p>
                </div>
            </NavLink>
            ))}
        </div>
    );
};

export default Cards;