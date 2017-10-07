import React from 'react';
import {Players} from './../api/players'

class AddPlayer extends React.Component{
  handleSubmit(e){
    let playerName = e.target.playerName.value;
    if(playerName){
      e.target.playerName.value="";
      //call players insert
      Players.insert({name:playerName, score:0});
    }
    e.preventDefault();
  }

  render(){
    return (
      <div>
      <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" name="playerName" placeholder="Player Name"/>
          <button>Add player</button>
        </form>
      </div>
    )
  }

}

export default AddPlayer;
