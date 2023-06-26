import React, { useContext, useEffect } from 'react'
import './MoviesPage.css'
import { AuthContext } from '../Context/Context'
import axios from 'axios'
import Navbar from '../Navbar/Navbar'
import MoviesCard from '../MoviesCard/MoviesCard'

const MoviesPage = () => {
    const {  setmovies, searchMovie, seterror, error } = useContext(AuthContext)

    useEffect(() => {
        const moviesdata = () => {
            axios.get(`https://www.omdbapi.com/?s=${searchMovie}&apikey=d903b998`)
            .then((res) => {
                console.log(res.data);
                setmovies(res.data.Search)
                if (res.data.Response === "True") {
                    setmovies(res.data.Search)
                    seterror("")
                } else {
                    seterror(res.data.Error)

                }
            })
        }
        moviesdata()
    }, [searchMovie])
    return (
        <div className='MoviesPage'>
            <Navbar />

            <div className="moviesCardsContainer">
                <h1 style={{ color: "red" }}>{error}</h1>
                <MoviesCard />
            </div>
        </div>
    )
}

export default MoviesPage