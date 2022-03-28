import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { selectCharacter } from "../../redux/actions/action";
import "../styles/cardStyle.scss";

const Card = ({ data, selectCharacter }) => {
  let navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    selectCharacter(data);
    navigate("/character");
  };

  return (
    <div className="ProductItem">
      <button onClick={handleClick}>
        <img src={data.image} alt="imagen" />
        <p>{data.name}</p>
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      selectCharacter,
    },
    dispatch
  );
};

export default connect(null,mapDispatchToProps)(Card);
