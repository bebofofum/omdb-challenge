import React from 'react'

const MovieListItem = ({ movie }) => {
    return(
        <div className="bg-gradient-to-t from-black via-pink-900 to-pink-700  h-72 w-28 md:w-1/5 md:rounded-3xl rounded-full shadow-md relative flex flex-col items-center justify-between md:items-start py-5 transition-all duration-150">
            <li className="text-yellow-300 capitalize text-xl font-bold m-2 px-3 pt-3">{movie.Title}</li>
            <div className="p-2 inline-block bg-indigo-800 border-solid border-2 border-light-blue-500 mx-1 mb-1 rounded-md" >
                <button 
                    className="text-white capitalize text-m m-2 px-2 ">
                    Nominate 
                </button>
            </div>
                
        </div>
    )

}

export default MovieListItem