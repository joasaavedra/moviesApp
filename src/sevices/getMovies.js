const apiKey = 'ceffc003'

export const getMovies = (keyword) => {
  const apiURL = `http://www.omdbapi.com/?apikey=${apiKey}&s=${keyword}`

    return fetch(apiURL)
      .then(res => res.json())
      .then(response => {
        const data = response.Search
        const movies = data.map(movie => movie)
        console.log(movies)
        return movies
    })
}