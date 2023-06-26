import React, { useContext } from 'react'
import './MoviesCard.css'
import { AuthContext } from '../Context/Context'
import { BiCalendar } from 'react-icons/bi';
const MoviesCard = () => {
  const { movies } = useContext(AuthContext)
  return (
    <>
      {movies && (movies.map((ele) => {
        return (
          <>
            <div className="card">
              <img className='cardImg'
                src={ele && ele.Poster} alt=""
              />
              <div className="cardOverlay">
                <div className="cardTitel">
                  {ele && ele.Title}
                </div>
                <div className="posterImage_release_date_rating">
                  <BiCalendar /> {ele && ele.Year}
                </div>

              </div>
            </div>
          </>
        )
      }))}
    </>

  )
}

export default MoviesCard