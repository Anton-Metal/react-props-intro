import { Movie } from '../../types/Movie'

interface MovieCardProps {
	movie: Movie
	
	
}


const MovieCard = (props: MovieCardProps) => ( 

	<div className="movie-card">

		<h2> {props.movie.title} </h2>
			<p> {props.movie.director} </p>
			<button> Return </button>
	</div>

	


)

export default MovieCard