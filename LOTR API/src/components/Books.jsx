import { useState, useEffect } from 'react'
import './App.css'
// import md5 from 'md5'

const API_KEY = import.meta.env.VITE_APP_API_KEY;

const Books = () => {

    const [quotes, setQuotes] = useState([]);
    const [characters, setCharacters] = useState([]);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchQuotes = async () => {
            const response = await fetch('https://the-one-api.dev/v2/quote', 
            {headers: {'Authorization': `Bearer ${API_KEY}`}});
            const json = await response.json();
            setQuotes(json.docs);
        }

        fetchQuotes().catch(console.error);
    }, []);



    useEffect(() => {
        const fetchCharacters = async () => {
            const response = await fetch('https://the-one-api.dev/v2/character', 
            {headers: {'Authorization': `Bearer ${API_KEY}`}});
            const json = await response.json();
            setCharacters(json.docs);
        }
    
        fetchCharacters().catch(console.error);
    }, []);



    useEffect(() => {
        const fetchMovies = async () => {
            const response = await fetch('https://the-one-api.dev/v2/movie', 
            {headers: {'Authorization': `Bearer ${API_KEY}`}});
            const json = await response.json();
            setMovies(json.docs);
        }

        fetchMovies().catch(console.error);
    }, []);


  return (
    <>
      <table>
        <thead>
            <tr>
               <th>Character</th>
                <th>Number of Quotes</th>
                <th>Random Quote</th>
                <th>Movie Title</th>
            </tr>
        </thead>
        <tbody>
            {characters.map((character) => {
                const characterQuotes = quotes.filter(quote => quote.character === character._id);
                if (characterQuotes.length === 0){
                    return null;
                }
                const randomQuote = characterQuotes[Math.floor(Math.random() * characterQuotes.length)];
                const movie = movies.find(movie => movie._id === randomQuote.movie);
                return (
                    <tr key={character._id}>
                        <td>{character.name}</td>
                        <td>{characterQuotes.length}</td>
                        <td>{randomQuote ? randomQuote.dialog : 'No quotes available for this character'}</td>
                        <td>{movie ? movie.name : 'No movie available for this quote'}</td>
                    </tr>
                );
            })}
        </tbody>
     </table>
    </>
    
  )
}

export default Books;
