import React from 'react';

const Card = ({data}) => {
    return (
        <div>
            <img src={data.image} />
            <p>{data.name}</p>
            
        </div>
    );
};

export default Card;