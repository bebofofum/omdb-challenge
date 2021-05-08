import React, { Component } from 'react'
import MovieSearch from '../components/MovieSearch'
import MovieList from '../components/MovieList'


class MovieListContainer extends Component {

    state = {
        movies: []
    }

    // constructor(props){
    //     super(props)
    // }

    handleSearch = (searchQuery) => {
        // console.log(this)
        // console.log(searchQuery)
        const searchResult = `http://www.omdbapi.com/?s=${encodeURI(searchQuery)}&apikey=824fa53d`

        fetch(searchResult)
        .then(response => response.json())
        .then(movieJson => {
            const foundMovies = movieJson.Search.slice(0,5).map(movies => movies)
            this.setState({
                movies: foundMovies
            })
        })

    }


    render() {
        return (
            <section className="max-w-2xl w-10/12 mx-auto mt-20">
                <h1 className="text-3xl font-semibold pb-4 text-gray-700">Movie List Container</h1>
                <MovieSearch handleSearch={this.handleSearch} />
                <MovieList movies={this.state.movies} />

            </section>
        )
    }
}

export default MovieListContainer