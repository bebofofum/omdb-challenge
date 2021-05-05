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

    render() {
        return(
            <div>
                <form>
                    <h1>Movie Search</h1>
                    <input 
                        type="text" 
                        name="search"
                        placeholder="Search a Movie" 
                        onChange={this.handleChange}
                        value={this.state.search}

                        />
                </form>
            </div>
        )
    }
}

export default MovieSearch;