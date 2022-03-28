import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getEpisodes } from '../../redux/actions/action';
import Episode from '../components/Episode';

const EpisodeContainer = ({episodesList, getEpisodes}) => {

    useEffect(() => {
        getEpisodes()
        console.log(episodesList)
    },[])

    return (
        <div>
            {            
            episodesList.map((item)=> {
                return <Episode key={item.id} data={item} />
            })
            }
            
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getEpisodes,
    },
    dispatch
    )
  }

const mapStateToProps = (state) => {
    return {
      episodesList: state.episodesData.data.results,
    };
  };

export default connect(mapStateToProps,mapDispatchToProps)(EpisodeContainer);