import React from "react";
import uuid from "react-uuid";
import "../styles/episodeCharacter.scss"

const EpisodeCharacter = ({ data }) => {
  return (
    <div className="episodeCharacter">
      <h2>Episodios:</h2>
      <ul>
          {data.episode.map((item) => {
              return <li key={uuid()}>
                <a href={item}>{item.replace("https://rickandmortyapi.com/api/e","E")}</a>
              </li>
          })}
          </ul>
    </div>
  );
};

export default EpisodeCharacter;
