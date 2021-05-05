import React from 'react'
import MovieListContainer from './containers/MovieListContainer'
import NavBar from './components/NavBar'

// the App component should render out the MovieListContainer component 


const App = () => {
  return (
    <div>
      <NavBar title="Movie Nominator"/>
      <MovieListContainer />
    </div>
  )
}

export default App
