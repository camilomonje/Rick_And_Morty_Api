import React from 'react';

const DataCharacter = ({data}) => {
    return (
        <div>
           <ul>
               <li>Name: {data.name}</li>
               <li>Status: {data.status}</li>
               <li>Species: {data.species}</li>
               <li>Gender: {data.gender}</li>
               <li>Origin: {data.origin.name}</li>
               <li>Location: {data.location.name}</li>
           </ul>
        </div>
    );
};

export default DataCharacter;