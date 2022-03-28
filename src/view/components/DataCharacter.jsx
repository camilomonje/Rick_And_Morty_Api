import React from "react";
import "../styles/dataCharacter.scss";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const DataCharacter = ({ data }) => {
  return (
    <div className="dataCharacter">
      <div className="dataTitle">
        <h1>Name: {data.name} </h1>
        {true ? (
          <AiOutlineStar style={{ fontSize: "50px", color: "gray" }} />
        ) : (
          <AiFillStar style={{ fontSize: "50px", color: "red" }} />
        )}
      </div>
      <h3>Status: {data.status}</h3>
      <h3>Species: {data.species}</h3>
      <h3>Gender: {data.gender}</h3>
      <h3>Origin: {data.origin.name}</h3>
      <h3>Location: {data.location.name}</h3>
    </div>
  );
};

export default DataCharacter;
