import React from 'react'

const NominatedMovies = ({ nominatedMovies }) => {
    return(
        <div>
            <h1 className="text-3xl font-semibold pb-4 pt-6 text-yellow-600">Nominated Movies</h1>
            <ul className="flex space-x-4 px-4 justify-around">{nominatedMovies.map((movie, index) => <li>{movie.name}</li>)}</ul>
        </div>
    )

}

export default NominatedMovies