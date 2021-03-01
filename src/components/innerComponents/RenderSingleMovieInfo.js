import React from "react";
import YouTube from "react-youtube";
import { BiMinus, BiPlus } from "react-icons/bi";

const RenderSingleMovieInfo = ({ 
   movie, 
   ourMovie, 
   singleMovie, 
   removeFavorite, 
   addToFavoriteList 
}) => {
   const { 
      original_name, 
      title, 
      first_air_date, 
      release_date, 
      overview, 
      backdrop_path,
      vote_average
   } = movie;

  const ops = {
    playerVars: {
      autoplay: 1,
    },
  };

  const movieTitle = original_name || title;
  const dateReleased = first_air_date || release_date;
  const addedClassName = ourMovie && ourMovie.joined ? "added single-more-info" : "single-more-info";
  const buttonText = ourMovie && ourMovie.joined ? "in my list" : "add to my list";
  const movieImg = `https://image.tmdb.org/t/p/original${backdrop_path}`;
  const iconToDisplay = ourMovie && ourMovie.joined ? <BiMinus /> : <BiPlus />;
  const toggleFunctions = ourMovie && 
                          ourMovie.joined ? 
                          () => removeFavorite(ourMovie) : 
                          () => addToFavoriteList(movie);

   return (
      <div className="single-movie-info-container">
         <div className="single-movie-info">
         <h1>{movieTitle}</h1>
         <div className="display-movie-info">
            <span className="rating">Rating: {vote_average}</span>
            <span className="date-release">date released: {dateReleased}</span>
         </div>
         <p className="single-movie-description">{overview}</p>
         <div className={addedClassName}>
            <button onClick={toggleFunctions}>
               <span>{iconToDisplay}</span>
               {buttonText}
            </button>
         </div>
         </div>
         <div className="image-movie-info">
         {singleMovie.length > 0 ? (
            <YouTube
               videoId={singleMovie[0].key}
               opts={ops}
               className="youtubes"
            />
         ) : (
            <img src={movieImg} alt={movieTitle} />
         )}
         </div>
      </div>    
   )
}

export default RenderSingleMovieInfo;
