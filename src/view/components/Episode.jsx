import React from "react";

const Episode = ({ data }) => {
  return (
    <div className="ProductItem">
        <ul>
            <li><p>{data.name}</p></li>
            <li><p>{data.air_date}</p></li>
            <li><p>{data.episode}</p></li>
        </ul>
     
    </div>
  );
};



export default Episode;
