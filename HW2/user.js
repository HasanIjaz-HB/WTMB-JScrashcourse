const lib = require("./lib");
const chalk = require("chalk");
module.exports = class User {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.reservations = [];
    this.complaints = [];
  }
  printReservations() {
    console.log(this.name + " has booked the following workers:");
    this.reservations.forEach(lib.printWorkerName);
  }
  printComplaintsByMe() {
    console.log(
      this.name +
        chalk.blueBright(" has filed complaints against the following workers:")
    );
    this.complaints.forEach(lib.printWorkerName);
  }
};
