import React from 'react'
import MovieListItem from './MovieListItem'

const MovieList = ({ movies, onClick }) => {
    return(
        <div className="mt-6">
            <h1 className="text-3xl font-semibold pb-4 text-yellow-600">Movie Title</h1>
            <ul className="flex space-x-4 px-4 justify-around">{movies.map(movie => <MovieListItem key={movie.Poster} movie={movie} onClick={onClick} />)}</ul>
        </div>
    )
}

export default MovieList;