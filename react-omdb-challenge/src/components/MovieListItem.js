import React from 'react'

//for the onClick callback I originally tried passing the itemId to the onNominatedClick. 
// now I'm trying with passing the movie and see what this gives me

const MovieListItem = ({itemID, movie, onNominateClick }) => {
    return(
        <div className="bg-gradient-to-t from-black via-pink-900 to-pink-700  h-72 w-28 md:w-1/4 md:rounded-3xl rounded-full shadow-md relative flex flex-col items-center justify-between md:items-start py-5 transition-all duration-150">
            <li className="text-yellow-300 capitalize text-xl font-bold m-2 px-3 pt-3">{movie.Title}</li>
            <div className="flex overflow-hidden w-full place-content-center flex leading-normal lg:h-full">
                <div className="m-2 h-15 w-full place-content-center bg-indigo-800 border-solid border-2 border-light-blue-500 mb-1 rounded-md" >
                <button 
                    className="p-2 w-full text-center text-white capitalize "
                    onClick={() => onNominateClick(movie)}>
                    Nominate 
                </button>
                </div>
            </div>
            
                
        </div>
    )

}

export default MovieListItem