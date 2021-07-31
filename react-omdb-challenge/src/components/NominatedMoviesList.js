import React from 'react'
import '../NominatedMovies.css';

const NominatedMoviesList = ({ nomimatedMoviesArray }) => {

    const renderMovieList = () => {
        if (!nomimatedMoviesArray.name) {

        } else {
            
        }
        let nominatedMovies = nomimatedMoviesArray

        if (nominatedMovies) {
            return (
                <>
                    <ul className="nominated-movies-list">
                        {nominatedMovies.map(movie => <li>{movie.name}</li>)}
                    </ul>      
                </>
            )
        } else {
            return (
                <h2 className='no-nomation-text'>No nominated movies yet.</h2>
            )
        }

    }

    return(
        <div>
            <h1 className="text-3xl font-semibold pb-4 pt-6 text-yellow-600">Nominated Movies</h1>
            <div>{renderMovieList()}</div>
        </div>
    )

}

export default NominatedMoviesList