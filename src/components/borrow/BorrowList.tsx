import { useState } from "react"
import { Movie } from '../../types/Movie'
import MovieCard from './MovieCard'


	
	
	const BorrowList = () => {

		//variabel som håller ordning på vilka böcker man har lånat 
		const [borrowed, setBorrowed] = useState<Movie[]>([])

		return (

		<section className="border">
			<h1>Catalog</h1>

			<div className="movie-container">
				{ borrowed.map(movie => <MovieCard movie= {movie} /> ) }
				<div className="movie-card">

				

				</div>

			</div>

		</section>

)
}
export default BorrowList