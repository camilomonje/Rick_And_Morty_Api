import axios from "axios";
import React, { useEffect, useState } from "react";
import DataCharacter from "../components/DataCharacter";
import EpisodeCharacter from "../components/EpisodeCharacter";
import ImageCharacter from "../components/ImageCharacter";

const CharacterContainer = () => {
  const [characters, setCharacters] = useState([]);

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
    <div>
      <ImageCharacter urlImage={characters.image} />
      <DataCharacter data = {characters} />
      {/* <EpisodeCharacter data={characters} /> */}
    </div>
  );
};

export default CharacterContainer;
