import {Mongo} from 'meteor/mongo';

//Creating collection of Players
//Look at the convention const Players
export const Players = new Mongo.Collection("players");
