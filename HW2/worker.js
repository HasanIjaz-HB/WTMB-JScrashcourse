const lib = require("./lib");
const Complaint = require("./complaint");
const chalk = require("chalk");
module.exports = class Worker {
  constructor(name, field, experience, email) {
    this.name = name;
    this.field = field;
    this.experience = experience;
    this.email = email;
    this.bookings = [];
    this.complaintlist = [];
  }
  createComplaintAgainst(client, text) {
    const complaint = new Complaint(client, this, text);
    this.complaintlist.push(complaint);
    complaint.client.complaints.push(complaint);
  }
  printBookings() {
    console.log(this.name + " was booked the following clients:");
    this.bookings.forEach(lib.printClientName);
  }
  printCompaintsAgainstMe() {
    console.log(
      this.name + chalk.red(" has complaints filed by the following clients:")
    );
    this.complaintlist.forEach(lib.printClientName);
  }
};
