import React, { useContext } from 'react'
import './Navbar.css'
import { BiSearch } from 'react-icons/bi';
import { AuthContext } from '../Context/Context';

const Navbar = () => {
  const {movieName,setmovieName,searchMovie,setsearchMovie} = useContext(AuthContext)
  return (
    <>
      <div className="header">

        <div className="headerLeft">
            <h1>Movies</h1>
        </div>
        <div className="headerRight">

          <div className="searchDiv">

            <input type="search" placeholder='Search Here' onChange={(e) => {
            console.log(movieName);
            setmovieName(e.currentTarget.value)
          }} />
            <BiSearch onClick={(e) => {
              console.log("clicked", searchMovie)
              setsearchMovie(movieName);
              console.log(movieName);

          }}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar