import { Movie } from '../../types/Movie'

interface MovieCardProps {
	movie: Movie
	rentMovie: (rentedMovie: Movie) => void
}


const MovieCard = ({ movie, rentMovie }: MovieCardProps) => ( 

	<div className="movie-card">

		<h2> {movie.title} </h2>
			<p> {movie.director} </p>
			<button onClick={() => rentMovie(movie)} > Rent </button>
	</div>
)

export default MovieCard