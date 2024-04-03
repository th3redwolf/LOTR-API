import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import NavBar from './components/NavBar'

// import md5 from 'md5'

const API_KEY = import.meta.env.VITE_APP_API_KEY;

function App() {

    const [quotes, setQuotes] = useState([]);
    const [characters, setCharacters] = useState([]);
    const [movies, setMovies] = useState([]);
    const [race, setRace] = useState("");
    const [search, setSearch] = useState("");

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

    const searchQuotes = event => {
        setSearch(event);
        console.log(search);
    }

    /*const [list, setList] = useState(null);

    const fetchBooks = async () => {
        const responseTitles = await fetch('https://the-one-api.dev/v2/book', 
        {headers: {'Authorization': `Bearer ${API_KEY}`}});
        const jsonTitles = await responseTitles.json();
        const titles = jsonTitles.docs;

    }
    
*/

    /*
   useEffect (() => {

    const fetchData = async () => {

        setList(allData);
        console.log(list);
    }
    fetchData().catch(console.error);
  }, []) */

  /*useEffect (() => {

    const fetchData = async () => {

        const ts = new Date().getTime();
        const hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY);
        const response = await fetch(`http://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`);
        const json = await response.json();

        console.log(`ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`);
        console.log(json);
        setList(json);
    }
    fetchData().catch(console.error);
  }, []) */

  return (
    <div>
        <div className="container-row">
            <div className="card">
                <h2 className="box">LOTR Characters</h2>
            </div>
            <div className="card">
                <h2 className="box">Quotes</h2>
            </div>
            <div className="card">
                <h2 className="box">Movie Appearance</h2>
            </div>
        </div>
      <div className="table">
        <div className="sticky">
        <label htmlFor="search">Search quotes </label>
        <input
            type="text"
            placeholder="Enter character name .."
            onChange={(event) => searchQuotes(event.target.value)}
        />
        <span> Filter by Race </span>
        <select onChange={(evenT) => setRace(evenT.target.value)}>
            <option value="">All</option>
            <option value="Human">Human</option>
            <option value="Elf">Elf</option>
            <option value="Dwarf">Dwarf</option>
            <option value="Hobbit">Hobbit</option>
            <option value="Maiar">Maiar / Wizard</option>
        </select>
        </div>
          <table>
              <thead className="table-header">
                  <tr>
                      <th>Character</th>
                      <th>Number of Quotes</th>
                      <th>Random Quote</th>
                      <th>Movie Title</th>
                  </tr>
              </thead>
              <tbody>
                  {characters
                    .filter(character => character.name.toLowerCase().includes(search.toLowerCase()))
                    .filter(character => race === '' || character.race === race)
                    .map((character) => {
                      const characterQuotes = quotes.filter(quote => quote.character === character._id);
                      if (characterQuotes.length === 0) {
                          return null;
                      }

                      return search ? characterQuotes.map((quote, index) => {
                        const movie = movies.find(movie => movie._id === quote.movie);
                        return (
                            <tr key={index} className="rows">
                                <td><Link to={`/info/${character._id}`}>{character.name}</Link></td>
                                <td>{characterQuotes.length}</td>
                                <td>{quote.dialog}</td>
                                <td>{movie ? movie.name : 'No movie available for this qote'}</td>
                            </tr>
                        )
                      }) : (() => {
                        const randomQuote = characterQuotes[Math.floor(Math.random() * characterQuotes.length)];
                        const movie = movies.find(movie => movie._id === randomQuote.movie);
                        return (
                          <tr key={character._id} className="rows">
                            <td><Link to={`/info/${character._id}`}>{character.name}</Link></td>
                            <td>{characterQuotes.length}</td>
                            <td>{randomQuote ? randomQuote.dialog : 'No quotes available for this character'}</td>
                            <td>{movie ? movie.name : 'No movie available for this quote'}</td>
                         </tr>
                        );
                      })()
                      
                  })}
              </tbody>
          </table>
      </div>
    </div>
  )
}

export default App;
