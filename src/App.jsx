import './App.css'
import MovieList from './assets/components/movieList/MovieList'
import movies from './assets/data/data'

function App() {

  return (
    <>
    <MovieList movies={movies}/>
    </>
  )
}

export default App
