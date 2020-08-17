const chalk = require("chalk");
module.exports = class User {
  constructor(name, age, email, reservations = [], complaints = [], id) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.reservations = reservations;
    this.complaints = complaints;
    this.id = id;
  }
  static create({ name, age, email, reservations, complaints, id }) {
    return new User(name, age, email, reservations, complaints, id);
  }
};
