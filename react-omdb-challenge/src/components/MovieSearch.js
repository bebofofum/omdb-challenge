import React, { Component } from 'react'

class MovieSearch extends Component {
    state = {
        search: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }
        )

    }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.handleSearch(this.state.search)
        //running setstate here to reset the state search key value and clear the form
        this.setState({
            search: ''
        })


    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Movie Search</h1>
                    <input 
                        type="text" 
                        name="search"
                        className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10"
                        placeholder="Search Movie Title" 
                        onChange={this.handleChange}
                        value={this.state.search}

                        />
                    <input 
                        type="submit"
                        name="search movies"
                        className="w-full mt-6 bg-gray-600 hover:bg-yellow-600 transition-all duration-200 text-white font-semibold p-3 rounded-md"
                    />

                </form>
            </div>
        )
    }
}

export default MovieSearch;