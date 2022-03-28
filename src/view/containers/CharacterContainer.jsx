import React, { Fragment } from "react";
import { connect } from "react-redux";
import DataCharacter from "../components/DataCharacter";
import EpisodeCharacter from "../components/EpisodeCharacter";
import ImageCharacter from "../components/ImageCharacter";
import "../styles/characterContainer.scss"

const CharacterContainer = ({character}) => {

 
  return (
    <div className="characterContainer">
      {(character.id !== undefined) ?
      <Fragment>
      <ImageCharacter urlImage={character.image}  />
      <DataCharacter data = {character} />
      <EpisodeCharacter data={character} />
      </Fragment>:
      <div>
        <h1>No ha seleccionado ningún personaje</h1>
        <h2>Selecciona uno <a href="/">aqui:</a></h2>
      </div>
      }
    
    </div>  
  
  );
};

const mapStateToProps = (state) => {
  return {
    character: state.selectedCharacter
  }
}

export default connect(mapStateToProps)(CharacterContainer);
