import React, { useState } from 'react';
import './App.css';
import { Movie } from './types/Movie'
import Catalogue from './components/catalogue/Catalogue'
import BorrowList from './components/borrow/BorrowList'


function App() {

	//variabel som håller ordning på vilka böcker man har lånat 
	const [borrowed, setBorrowed] = useState<Movie[]>([])

	const liftHandleRentedMovie = (movie: Movie) => {

	//för att kopiera listan
	//borrowed är ju tomt element så man lägger till movie på slutet för att lägga till en film
		let newList = [ ...borrowed, movie ]
		// för att uppdatera lisan  -- och den skcikas ner till BorrowList
		setBorrowed(newList)

	}
  return (
    <main>
		
		<Catalogue liftHandleRentedMovie={liftHandleRentedMovie} />
		<BorrowList borrowed={borrowed}/>
		

	</main>
  );
}

export default App;
