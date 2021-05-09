
interface Movie {

	id: number ,
	title: string,
	director: string

}

const movies: Movie[] = [
	{ id: 1, title: 'James Bond - The Living Daylights', director: 'John Glen'},
	{ id: 2, title: 'Harry Potter and the Chamber of Secrets', director: 'Chris Columbus'}
]




const Catalogue = () => (



	<section className="border">
		<h1>Catalog</h1>

			<div className="movie-container">

			{

				movies.map(movie => (



					<div className="movie-card">

					<h2> {movie.title} </h2>
					<p> {movie.director} </p>
					<button> Rent </button>

				</div>


				))

			}

				
			</div>

		</section>

)

export default Catalogue