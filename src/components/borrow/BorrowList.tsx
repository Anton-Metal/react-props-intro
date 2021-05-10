
import { Movie } from '../../types/Movie'
import MovieCard from './MovieCard'

interface props{

	borrowed: Movie[]
	
}
	
	
	const BorrowList = ({ borrowed }: props) => {

		return (

		<section className="border">
			<h1>Catalog</h1>

			<div className="movie-container">
				{ borrowed.map(movie => <MovieCard movie={movie} key={movie.id}/> ) }
				
			</div>
		</section>

	)
}
export default BorrowList