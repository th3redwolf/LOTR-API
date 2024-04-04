import React, {Component, useEffect, useState} from "react";
import {BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Label} from "recharts";

const Chart = ({fullDetails}) => {

    const [details, setDetails] = useState(null);
    const lotrMovies = fullDetails.movies.filter(movie => movie.name.includes("The Unexpected Journey") || movie.name.includes("The Desolation of Smaug") || movie.name.includes("The Battle of the Five Armies") || movie.name.includes("The Two Towers") || movie.name.includes("The Fellowship of the Ring") || movie.name.includes("The Return of the King"));

    return (
        <div>
            <br></br>
            <h2>Movie Chart</h2>
            <BarChart width={700} height={300} data={lotrMovies} margin={{ top: 10, right: 30, bottom: 30, left: 20 }}>
                <XAxis dataKey="name" stroke="#8884d8">
                    <Label value="Movies" offset={-5} position="insideBottom"/>
                </XAxis>
                <YAxis label={{ value: 'Box Office Revenue (in millions)', angle: -90, position: 'insideLeft' }}/>
                <Tooltip />
                <CartesianGrid strokeDasharray="5 5" />
                <Bar dataKey="boxOfficeRevenueInMillions" fill="#8884d8" barSize={30} />
            </BarChart>
        </div>
    )
}

export default Chart;

{/* <BarChart width={500} height={500} data={lotrMovies} layout="vertical" margin={{ top: 10, right: 30, bottom: 30, left: 20 }}>
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" stroke="#8884d8">
                    <Label value="Movies" angle={0} position="insideLeft" style={{textAnchor: 'start'}}/>
                </YAxis>
                <Tooltip />
                <CartesianGrid strokeDasharray="5 5" />
                <Bar dataKey="boxOfficeRevenueInMillions" fill="#8884d8" barSize={30} />
            </BarChart> */}