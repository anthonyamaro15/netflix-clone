import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import backUpImg from '../../img/people.jpg';

const AppHeader = ({ popular }) => {
   const { url } = useRouteMatch();
   const { 
      backdrop_path, 
      poster_path, 
      original_title, 
      original_name, 
      overview, 
      id 
   } = popular;

   const movieImg = `https://image.tmdb.org/t/p/original${backdrop_path || poster_path}` || backUpImg;
   const movieTitle = original_title || original_name;
   const movieDescription = overview.slice(0, 450) + '...';

   return (
      <div className="header-container">
         <img src={movieImg} alt="header of the application"/>
         <div className="movie-info">
            <h1>{movieTitle}</h1>
            <p className="movie-description">{movieDescription}</p>
            <div className="more-info">
               <Link to={`${url}/${id}`}>
                  more info
               </Link>
            </div>
         </div>
      </div>
   )
}

export default AppHeader;
