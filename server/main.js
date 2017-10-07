import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(() => {


  // class Person {
  //   constructor(name= 'Anonymous', age =21){
  //     this.name = name;
  //     this.age = age;
  //   }
  //   getGreeting(){
  //     //Hi! I am Oleg
  //     //return "Hi! I am " + this.name+ ".";
  //     return `Hi! I am ${this.name}.`;
  //   }
  //
  //   getPersonDescription(){
  //     return `Hello! My name is ${this.name} and I am ${this.age} years old`;
  //   }
  //
  // }
  //
  //
  // class Employee extends Person{
  //   constructor(name, age, title){
  //     super(name, age);
  //     this.title = title;
  //   }
  //
  //   hasJob(){
  //     return !!this.title;
  //   }
  //
  //   getGreeting(){
  //     //Hi! I am Oleg
  //     //return "Hi! I am " + this.name+ ".";
  //     if(this.title)
  //       return `Hi! I am ${this.name} and I work as ${this.title} `;
  //     else {
  //       return super.getGreeting();
  //     }
  //   }
  //
  //
  // }
  //
  // class Programmer extends Person{
  //   constructor(name, age, pl){
  //     super(name, age);
  //     this.preferredLanguage = pl;
  //   }
  //
  //   getGreeting(){
  //     if(this.preferredLanguage)
  //     return `Hi! I am ${this.name} and I work as a ${this.preferredLanguage}`
  //     else {
  //       return super.getGreeting();
  //     }
  //   }
  // }
  // //let me = new Person('Oleg');
  // //console.log(me.getGreeting());
  // let me1 = new Employee('Mike',27,'DB Admin');
  // console.log(me1.getGreeting());
  // console.log(me1.hasJob());
  // let me = new Employee('James',20);
  // console.log(me.getGreeting());
  // console.log(me.hasJob());
  //
  // let me2 = new Programmer('Oleg',27, 'Java Developer');
  // console.log(me2.getGreeting());
  // //console.log(me.hasJob());
});
