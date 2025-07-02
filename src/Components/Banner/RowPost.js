import React, { useEffect, useState } from 'react'
import { API_KEY, imageUrl } from './Constants'
import './RowPost.css'
import axios from './Axios'

function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [noVideo, setNoVedio] = useState(false)
    useEffect(() => {
        axios.get(props.urls).then((response) => {
            setMovies(response.data.results)
        })
    }, [props.urls])

    const handleMovie = (id) => {
        console.log(id)
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
            if (response.data.results.length !== 0) {
                const videoKey = response.data.results[0].key
                const youtubeUrl = `https://www.youtube.com/watch?v=${videoKey}`
                window.open(youtubeUrl, '_blank')
            } else {
                setNoVedio(true);
            }})
            .catch(error => {
                console.error('Error fetching video:', error)
                setNoVedio(true) // Show fallback message on error too
            })
    }
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {movies.map((obj) => {
                    return (<img onClick={() => { handleMovie(obj.id) }} className={props.isSmall ? 'small-poster' : 'poster'} src={`${imageUrl + obj.backdrop_path}`} alt="" />

                    )
                })}

            </div>
            {noVideo && (
                <p className="no-video-message">
                    Sorry, no trailer available for this movie.
                </p>
            )}

        </div>
    )
}

export default RowPost