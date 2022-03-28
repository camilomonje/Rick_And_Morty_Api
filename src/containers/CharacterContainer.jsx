import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import DataCharacter from "../components/DataCharacter";
import EpisodeCharacter from "../components/EpisodeCharacter";
import ImageCharacter from "../components/ImageCharacter";
import "../styles/characterContainer.scss"

const CharacterContainer = () => {
  const [characters, setCharacters] = useState();

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/1")
      .then((data) => {
        setCharacters(data.data);
        // setInfo(data.data.info);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <div className="characterContainer">
      {characters !== undefined &&
      <Fragment>
      <ImageCharacter urlImage={characters.image}  />
      <DataCharacter data = {characters} />
      <EpisodeCharacter data={characters} />
      </Fragment>}
    
    </div>  
  
  );
};

export default CharacterContainer;
