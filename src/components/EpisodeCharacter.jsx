import React from "react";

const EpisodeCharacter = ({ data }) => {
  return (
    <div>
      <ul>
          {data.episode.map((item) => {
              return <li>{item}</li>
          })}
          </ul>
    </div>
  );
};

export default EpisodeCharacter;
