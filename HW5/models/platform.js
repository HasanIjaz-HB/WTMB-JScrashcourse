const chalk = require("chalk");
module.exports = class platform {
  constructor(name, users = [], workers = [], bookings = [], id) {
    this.name = name;
    this.users = users;
    this.workers = workers;
    this.bookings = bookings;
    this.id = id;
  }

  report() {
    console.log(
      chalk.blue.bgRed.bold(this.name),
      "platform contains",
      chalk.green(this.users.length),
      "users",
      "and number of workers are",
      this.workers.length
    );
  }

  static create({ name, users, workers, bookings, id }) {
    return new platform(name, users, workers, bookings, id);
  }
};
