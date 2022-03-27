import React from 'react';
import "../styles/cardStyle.scss"

const Card = ({data}) => {
    return (
        <div className='ProductItem'>
            <img src={data.image} alt="imagen" />
            <p>{data.name}</p>
            
        </div>
    );
};

export default Card;