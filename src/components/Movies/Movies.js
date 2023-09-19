import { useState, useEffect } from "react"
import { getMovies } from "../../sevices/getMovies"
import { Movie } from "../Movie/Movie"

export const Movies = () => {
    const [movies, setMovies] = useState([])

    useEffect(()=> {
        getMovies('batman').then(movies => setMovies(movies))
    }, [])

    return (
        <div>
            {
            movies.map(singleMovie => 
                <Movie 
                    title={singleMovie.Title} 
                    poster={singleMovie.Poster} 
                    key={singleMovie.imdbID}
                />
                )
            }   
        </div>
    )
}