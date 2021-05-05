import React, { Component } from 'react'
import MovieSearch from '../components/MovieSearch'
import MovieList from '../components/MovieList'


class MovieListContainer extends Component {
    render() {
        return (
            <section className="max-w-2xl w-10/12 mx-auto mt-20">
                <h1 className="text-3xl font-semibold pb-4 text-gray-700">Movie List Container</h1>
                <MovieSearch />
                <MovieList />

            </section>
        )
    }
}

export default MovieListContainer