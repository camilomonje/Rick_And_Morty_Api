import React from 'react';
import "../styles/cardStyle.scss"

const Card = ({data}) => {


    return (
        <div className='ProductItem'>
            <a href='/character'>
            <img src={data.image} alt="imagen" />
            <p>{data.name}</p>
            </a>
            
        </div>
    );
};

export default Card;