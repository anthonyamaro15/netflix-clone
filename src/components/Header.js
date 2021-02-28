import React, { useEffect, useState } from "react";
import AppHeader from './innerComponents/AppHeader';

const Header = ({ popular }) => {
  const [num, setRandom] = useState([]);

  // function takes care of selecting a random movie every time the page loads
  useEffect(() => {
   function random() {
      if(popular.length) {
         let randomMovie = Math.floor(Math.random() * popular.length) + 1;
         return randomMovie;
      }
   }
   setRandom(random());
  },[popular]);

  // checking if we have data avaliable if not then display a default img
  return (
     popular[num] ? (
        <AppHeader popular={popular[num]} />
    ) : <h1 className="loading-movie">Loading movie description...</h1>
  );
};

export default Header;
