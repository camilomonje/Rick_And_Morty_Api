import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import Card from "../components/Card";
import "../styles/cardsContainers.scss"
import { getCharacters } from "../../redux/actions/action";
import { connect } from "react-redux";

const CardsContainer = ({getCharacters, charactersList}) => {

  useEffect(() => {
      getCharacters();
  },[]);

  return <div className="ListContainer">
      {charactersList.map((item) => {
          return <Card key={item.id} data={item}/>;
      })}
  </div>;
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getCharacters,
  },
  dispatch
  )
}

const mapStateToProps = (state) => {
  return {
    charactersList: state.charactersData.results
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CardsContainer);
