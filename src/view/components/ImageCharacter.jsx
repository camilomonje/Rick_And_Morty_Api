import React from 'react';
import "../styles/imageCharacter.scss"

const ImageCharacter = ({urlImage}) => {
    return (
        <div className="characterImg">
           <img src={urlImage} alt=''></img> 
        </div>
    );
};

export default ImageCharacter;