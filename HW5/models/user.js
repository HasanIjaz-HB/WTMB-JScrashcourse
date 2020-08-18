const chalk = require("chalk");
module.exports = class User {
  constructor(name, age, email, userbookings = [], complaints = [], id) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.userbookings = userbookings;
    this.complaints = complaints;
    this.id = id;
  }
  registeruser(platform) {
    platform.users.push(this);
  }
  bookworker(Worker) {
    workforce.bookings.push(Worker);
    this.userbookings.push(Worker);
    Worker.workerbookedby.push(this);
  }
  //   printuserbooking() {
  //     console.log(this.name + " has booked the following workers:");
  //     this.userbookings.forEach(printName2);
  //   }
  usercomplain(Worker) {
    this.complaints.push(Worker);
    Worker.complaintlist.push(this);
  }
  //   printcomplaints() {
  //     console.log(
  //       this.name + " has filed complaints against the following workers:"
  //     );
  //     this.complaints.forEach(printName2);
  //   }
  static create({ name, age, email, userbookings, complaints, id }) {
    return new User(name, age, email, userbookings, complaints, id);
  }
};
