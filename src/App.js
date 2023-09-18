import {useEffect, useState} from 'react';
import './App.css';

const apiURL = 'http://www.omdbapi.com/?apikey=ceffc003&s=batman'

function App() {
  const [movies, setMovies] = useState([])

  useEffect(() => { 
    console.log('cargando pelicula')
    fetch(apiURL)
      .then(res => res.json())
      .then(response => {
        const data = response.Search
        const movies = data.map(movie => movie.Title)
        setMovies(movies)
      })
    }, [])

  return (
    <div className="App">
      <header className="App-header">
        {
        movies.map(singleMovie => <h1>{singleMovie}</h1>)
        }
      </header>
    </div>
  );
}

export default App;
