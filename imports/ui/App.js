import React from 'react';
import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayersList';
import PropTypes from 'prop-types';

export default class App extends React.Component{
  render(){
    return(
      <div>
        <div>
          <TitleBar title={this.props.title} subTitle='Created by Oleg Mytryniuk'/>
          <PlayerList players={this.props.players}/>
          <AddPlayer/>
        </div>
      </div>
    )
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  players: PropTypes.array.isRequired
}
