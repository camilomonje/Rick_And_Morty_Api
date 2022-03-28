import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import "../styles/cardsContainers.scss"

const CardsContainer = () => {
  
    const [characters, setCharacters] = useState([]);
  
    useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((data) => {
        setCharacters(data.data.results);
        // setInfo(data.data.info);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return <div className="ListContainer">
      {characters.map((item) => {
          return <Card key={item.id} data={item}/>;
      })}
  </div>;
};

export default CardsContainer;
