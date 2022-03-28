import React, { useEffect, useState } from "react";
import "../styles/dataCharacter.scss";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { bindActionCreators } from "redux";
import { addFavorite, removeFavorite } from "../../redux/actions/action";
import { connect } from "react-redux";

const DataCharacter = ({ data, addFavorite,removeFavorite, favoriteList }) => {

  const [favorite, setFavorite] = useState();

  const isFavorite = () => {
    setFavorite(favoriteList.filter(item => item.id === data.id).length > 0)
  }
  
  useEffect(() => {
    isFavorite()
  },[])

  const onClick = (event) => {
    event.preventDefault();
    if(favorite) {
      removeFavorite(data.id);
    }else {
      addFavorite(data);
      
    }
   setFavorite(!favorite);
  };

  return (
    <div className="dataCharacter">
      <div className="dataTitle">
        <h1>Name: {data.name} </h1>
        <button onClick={onClick}>
          {!favorite ? (
            <AiOutlineStar style={{ fontSize: "50px", color: "gray" }} />
          ) : (
            <AiFillStar style={{ fontSize: "50px", color: "red" }} />
          )}
        </button>
      </div>
      <h3>Status: {data.status}</h3>
      <h3>Species: {data.species}</h3>
      <h3>Gender: {data.gender}</h3>
      <h3>Origin: {data.origin.name}</h3>
      <h3>Location: {data.location.name}</h3>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      addFavorite,
      removeFavorite,
    },
    dispatch
  );
};

const mapStateToProps= (state) => {
  return{
    favoriteList: state.myFavorites
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DataCharacter);
