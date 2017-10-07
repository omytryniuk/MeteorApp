import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';
import App from './../imports/ui/App';
import {Tracker} from 'meteor/tracker';

Meteor.startup(()=>{
  Tracker.autorun(()=>{
    let players = Players
      .find({},{sort:{score:-1}})
      .fetch();
    let title="Score Keeper";
    ReactDOM.render(<App title={title} players={players}/>,document.getElementById('app'));
  });
});
