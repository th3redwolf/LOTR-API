import React, {Component, useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const API_KEY = import.meta.env.VITE_APP_API_KEY;

const Info = () => {

    const {characterId} = useParams();
    const [fullDetails, setFullDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const allDetails = async () => {

            const chars = await fetch(`https://the-one-api.dev/v2/character/${characterId}`, 
            {headers: {'Authorization': `Bearer ${API_KEY}`}});

            const quotes = await fetch(`https://the-one-api.dev/v2/character/${characterId}/quote`, 
            {headers: {'Authorization': `Bearer ${API_KEY}`}});

            const movies = await fetch('https://the-one-api.dev/v2/movie', 
            {headers: {'Authorization': `Bearer ${API_KEY}`}});

            const charsJson = await chars.json();
            const quotesJson = await quotes.json();
            const movJson = await movies.json();

            console.log(charsJson);  // Add this
            console.log(quotesJson);  // Add this
            console.log(movJson);

            setFullDetails({"character": charsJson.docs, "quotes": quotesJson.docs, "movies": movJson.docs});
            setLoading(false);
        }
        allDetails().catch(console.error);
    }, [characterId]);

    if(loading){
        return (
            <div>
                Loading ..
            </div>
        )
    }

    return (
        <div>
            <h1>{fullDetails.character[0].name}</h1>
            <table className="info-table">
                <tbody>
                    <tr>
                        <th>More Detailed Info</th>
                        <td><a href={fullDetails.character[0].wikiUrl} target="_blank" rel="noopener noreferrer">{fullDetails.character[0].wikiUrl}</a></td>
                    </tr>
                    <tr>
                        <th>Birthdate</th>
                        <td>{fullDetails.character[0].birth}</td>
                    </tr>
                    <tr>
                        <th>Race</th>
                        <td>{fullDetails.character[0].race}</td>
                    </tr>
                    <tr>
                        <th>Height</th>
                        <td>{fullDetails.character[0].height}</td>
                    </tr>
                    <tr>
                        <th></th>
                        <td></td>
                    </tr>
                    <tr>
                        <th></th>
                        <td></td>
                    </tr>
                    <tr>
                        <th></th>
                        <td></td>
                    </tr>
                    <tr>
                        <th></th>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Info

// character:
// "_id": "5cd99d4bde30eff6ebccfc15",
// "height": "1.06m (3'6\")",
// "race": "Hobbit",
// "gender": "Male",
// "birth": "22 September ,TA 2968",
// "spouse": "",
// "death": "Unknown (Last sighting ,September 29 ,3021,) (,SR 1421,)",
// "realm": "",
// "hair": "Brown",
// "name": "Frodo Baggins",
// "wikiUrl": "http://lotr.wikia.com//wiki/Frodo_Baggins"

// quotes:
// {
//     "_id": "5cd96e05de30eff6ebcce7f6",
//     "dialog": "Gandalf?",
//     "movie": "5cd95395de30eff6ebccde5d",
//     "character": "5cd99d4bde30eff6ebccfc15",
//     "id": "5cd96e05de30eff6ebcce7f6"
// },
// {
//     "_id": "5cd96e05de30eff6ebcce7f7",
//     "dialog": "Oooohhh!",
//     "movie": "5cd95395de30eff6ebccde5d",
//     "character": "5cd99d4bde30eff6ebccfc15",
//     "id": "5cd96e05de30eff6ebcce7f7"
// },
// {
//     "_id": "5cd96e05de30eff6ebcce7fb",
//     "dialog": "Gimli!",
//     "movie": "5cd95395de30eff6ebccde5d",
//     "character": "5cd99d4bde30eff6ebccfc15",
//     "id": "5cd96e05de30eff6ebcce7fb"
// },
// {
//     "_id": "5cd96e05de30eff6ebcce805",
//     "dialog": "No, it isn't. It isn't midday yet. The days are growing darker.",
//     "movie": "5cd95395de30eff6ebccde5d",
//     "character": "5cd99d4bde30eff6ebccfc15",
//     "id": "5cd96e05de30eff6ebcce805"
// },
// {
//     "_id": "5cd96e05de30eff6ebcce807",
//     "dialog": "What about you?",
//     "movie": "5cd95395de30eff6ebccde5d",
//     "character": "5cd99d4bde30eff6ebccfc15",
//     "id": "5cd96e05de30eff6ebcce807"
// },


// movie:
// {
//     "_id": "5cd95395de30eff6ebccde56",
//     "name": "The Lord of the Rings Series",
//     "runtimeInMinutes": 558,
//     "budgetInMillions": 281,
//     "boxOfficeRevenueInMillions": 2917,
//     "academyAwardNominations": 30,
//     "academyAwardWins": 17,
//     "rottenTomatoesScore": 94
// },
// {
//     "_id": "5cd95395de30eff6ebccde57",
//     "name": "The Hobbit Series",
//     "runtimeInMinutes": 462,
//     "budgetInMillions": 675,
//     "boxOfficeRevenueInMillions": 2932,
//     "academyAwardNominations": 7,
//     "academyAwardWins": 1,
//     "rottenTomatoesScore": 66.33333333
// },
// {
//     "_id": "5cd95395de30eff6ebccde58",
//     "name": "The Unexpected Journey",
//     "runtimeInMinutes": 169,
//     "budgetInMillions": 200,
//     "boxOfficeRevenueInMillions": 1021,
//     "academyAwardNominations": 3,
//     "academyAwardWins": 1,
//     "rottenTomatoesScore": 64
// },
// {
//     "_id": "5cd95395de30eff6ebccde59",
//     "name": "The Desolation of Smaug",
//     "runtimeInMinutes": 161,
//     "budgetInMillions": 217,
//     "boxOfficeRevenueInMillions": 958.4,
//     "academyAwardNominations": 3,
//     "academyAwardWins": 0,
//     "rottenTomatoesScore": 75
// },
// {
//     "_id": "5cd95395de30eff6ebccde5a",
//     "name": "The Battle of the Five Armies",
//     "runtimeInMinutes": 144,
//     "budgetInMillions": 250,
//     "boxOfficeRevenueInMillions": 956,
//     "academyAwardNominations": 1,
//     "academyAwardWins": 0,
//     "rottenTomatoesScore": 60
// },
// {
//     "_id": "5cd95395de30eff6ebccde5b",
//     "name": "The Two Towers",
//     "runtimeInMinutes": 179,
//     "budgetInMillions": 94,
//     "boxOfficeRevenueInMillions": 926,
//     "academyAwardNominations": 6,
//     "academyAwardWins": 2,
//     "rottenTomatoesScore": 96
// },
// {
//     "_id": "5cd95395de30eff6ebccde5c",
//     "name": "The Fellowship of the Ring",
//     "runtimeInMinutes": 178,
//     "budgetInMillions": 93,
//     "boxOfficeRevenueInMillions": 871.5,
//     "academyAwardNominations": 13,
//     "academyAwardWins": 4,
//     "rottenTomatoesScore": 91
// },
// {
//     "_id": "5cd95395de30eff6ebccde5d",
//     "name": "The Return of the King",
//     "runtimeInMinutes": 201,
//     "budgetInMillions": 94,
//     "boxOfficeRevenueInMillions": 1120,
//     "academyAwardNominations": 11,
//     "academyAwardWins": 11,
//     "rottenTomatoesScore": 95
// }
// ],
// "total": 8,
// "limit": 1000,
// "offset": 0,
// "page": 1,
// "pages": 1
// }