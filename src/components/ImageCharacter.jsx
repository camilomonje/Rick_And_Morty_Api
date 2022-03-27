import React from 'react';

const ImageCharacter = ({urlImage}) => {
    return (
        <div>
           <img src={urlImage} alt=''></img> 
        </div>
    );
};

export default ImageCharacter;