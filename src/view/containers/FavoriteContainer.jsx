import React from "react";
import { connect } from "react-redux";
// import { bindActionCreators } from 'redux';
import Card from "../components/Card";
import NotFound from "../components/NotFound";
// import { getFavorites } from '../../redux/actions/action';

const FavoriteContainer = ({ favoriteList }) => {

  return (
    <div className="ListContainer">
      {favoriteList.length !== 0 ? (
          
        favoriteList.map((item) => {
          return <Card key={item.id} data={item} />;
        })
      ) : (
        <NotFound />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    favoriteList: state.myFavorites,
  };
};

export default connect(mapStateToProps)(FavoriteContainer);
