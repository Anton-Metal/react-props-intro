
import { useState } from "react"
import MovieCard from './MovieCard'
import { Movie } from '../../types/Movie'


const movies: Movie[] = [
	{ id: 1, title: 'James Bond - The Living Daylights', director: 'John Glen'},
	{ id: 2, title: 'Harry Potter and the Chamber of Secrets', director: 'Chris Columbus'},
	{ id: 3, title: 'Star Wars Return of the Jedi', director: 'Richard Marquand'},
	{ id: 4, title: 'Indiana Jones and the Last Crusade', director: 'Steven Spielberg'},
	{ id: 5, title: 'Jurassic Park', director: 'Steven Spielberg'},
	{ id: 6, title: 'Terminator 2 - Judgment Day', director: 'James Cameron'}
]




	const Catalogue = () => {

		const [movieList, setMovieList] = useState(movies)

		// till för att låna ut en film
		const rentMovie = (rentedMovie: Movie) => {
			// en kopia av movieList utan den man trcykte på 
										// gemför objekten(movie) med id 
			let newList = movieList.filter(movie => movie.id ! ==rentedMovie.id) 

			setMovieList(newList)

		}

		return (  

			<section className="border">
				<h1>Catalog</h1>

					<div className="movie-container">

					{ movieList.map(movie => (<MovieCard movie={movie} 
					rentMovie={rentMovie} />))}
						
					</div>

				</section>

		) 
	}
export default Catalogue