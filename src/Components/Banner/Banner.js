import React, { useEffect, useState } from 'react'
import { API_KEY, imageUrl } from '../Banner/Constants'
import './Banner.css'
import axios from './Axios'
function Banner() {
  const [movie, setMovie] = useState(null)
  const fetchRandomMovie = () => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        const results = response.data.results;
        const filtered = results.filter(item => item.backdrop_path);
        const randomIndex = Math.floor(Math.random() * filtered.length);
        setMovie(filtered[randomIndex]);
      });
  };

  useEffect(() => {
    fetchRandomMovie();
  }, []);
  return (
    <div style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ''})` }}
      className='banner'>
      <div className='content'>
        <h1 className='title'>{movie?.title || movie?.name || ''}</h1>
        <div className='banner-buttons'>
          <button className='button'>Play</button>
          <button className='button'>My List</button>
        </div>
        <h1 className='description'>{movie ? movie.overview : ''}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
