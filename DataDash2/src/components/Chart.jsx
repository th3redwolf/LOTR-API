import React, {Component, useEffect, useState} from "react";
import {BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Label, Legend} from "recharts";

const Chart = ({fullDetails}) => {

    const lotrMovies = fullDetails.movies
        .filter(movie => movie.name.includes("The Unexpected Journey") || movie.name.includes("The Desolation of Smaug") || 
        movie.name.includes("The Battle of the Five Armies") || movie.name.includes("The Fellowship of the Ring") || 
        movie.name.includes("The Two Towers") || movie.name.includes("The Return of the King"))
        .sort((a, b) => {
            const order = ["The Unexpected Journey", "The Desolation of Smaug", "The Battle of the Five Armies", "The Fellowship of the Ring", "The Two Towers", "The Return of the King"];
            return order.indexOf(a.name) - order.indexOf(b.name);
        });
    
    

    return (
        <div>
            <div>
                <br></br>
                <h2 style={{textShadow: "2px 2px 4px #fff"}}>Movie Revenue Chart</h2>
                <BarChart width={700} height={300} data={lotrMovies} margin={{ top: 10, right: 30, bottom: 30, left: 20 }}>
                    <XAxis dataKey="name" stroke="white" angle={20} tick={{fontSize: 11}}>
                        <Label value="Movies" offset={-20} position="insideBottom"/>
                    </XAxis>
                    <YAxis label={{ value: 'Box Office Revenue (in millions)', angle: -90, position: 'insideLeft', dy: 100}}/>
                    <Tooltip />
                    <CartesianGrid strokeDasharray="5 5" />
                    <Bar dataKey="boxOfficeRevenueInMillions" fill="#8884d8" barSize={30} />
                </BarChart>
            </div>
            <div>
                <h2 style={{textShadow: "2px 2px 4px #fff"}}>Academy Awards Chart</h2>
                <BarChart width={700} height={300} data={lotrMovies} margin={{ top: 10, right: 30, bottom: 30, left: 20 }}>
                    <XAxis dataKey="name" stroke="white" angle={20} tick={{fontSize: 11}}/>
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid strokeDasharray="5 5" />
                    <Bar dataKey="academyAwardNominations" fill="#8884d8" barSize={15} />
                    <Bar dataKey="academyAwardWins" fill="#82ca9d" barSize={15} />
                </BarChart>
            </div>
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