

import { useState } from "react";
import MovieCard from "../movieCard/MovieCard";
import './movielist.css'
import Header from "../header/Header";

const MovieList = ({movies}) => {
    const[movie, setMovies]= useState(movies)
    const[search, setSearch] =useState("")
    console.log(movies);

    const sortFunctionUp = () =>{
        let ourDataCopy = [...movie]
        console.log(ourDataCopy);
        let sortMovieArry = ourDataCopy.sort((a,b)=>{
            return b.year - a.year
        })

        setMovies(sortMovieArry)
    }

    const sortFunctionDown = () =>{
        let ourDataCopy = [...movie]
        console.log(ourDataCopy);
        let sortMovieArry = ourDataCopy.sort((a,b)=>{
            return a.year - b.year
        })

        setMovies(sortMovieArry)
    }
    const bestRate = () =>{
        let ourDataCopy = [...movie]
        console.log(ourDataCopy);
        let sortMovieArry = ourDataCopy.sort((a,b)=>{
            return b.rate - a.rate
        })

        setMovies(sortMovieArry)
    }

    const sortAtoZ = () =>{
        let ourDataCopy = [...movie]
        console.log(ourDataCopy);
        let sortMovieArry = ourDataCopy.sort((a,b)=>{
            return  (a.title > b.title) - (a.title < b.title)
        })
        setMovies(sortMovieArry)
    }

    const sortZtoA = () =>{
        let ourDataCopy = [...movie]
        console.log(ourDataCopy);
        let sortMovieArry = ourDataCopy.sort((a,b)=>{
            return  (a.title < b.title) - (a.title > b.title)
        })
        setMovies(sortMovieArry)
    }


    const showGenre = (event) =>{
        

        let sortMovieArry = movies.filter(movie => movie.genre.includes(event.target.value))
        console.log(sortMovieArry);
        setMovies(sortMovieArry)
    }

    const serachFunction = (event) => {
        setSearch(event.target.value)
        let sortMovieArry = movies.filter(movie => movie.title.toLowerCase().includes(event.target.value.toLowerCase()))

        setMovies(sortMovieArry)
        


    }

    return ( 
        <>
        <Header
        showGenre={showGenre}
        sortZtoA={sortZtoA}
        sortAtoZ={sortAtoZ}
        sortFunctionUp={sortFunctionUp}
        sortFunctionDown={sortFunctionDown}
        bestRate={bestRate}
        serachFunction={serachFunction}
        search={search}
        
        />
        <div className='movieList'>
        {movie.map((movie, index) =>
        <div className ='movieCard' key={index} >
        <MovieCard
        index={index}
        title={movie.title}
        year={movie.year}
        director={movie.director}
        duration={movie.duration}
        genre={movie.genre}
        rating={movie.rate}
        />
        </div>
        )}
        </div>
        </>
     );
}
 
export default MovieList;