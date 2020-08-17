const chalk = require("chalk");
const Booking = require("./booking");
module.exports = class Platform {
  constructor(name, users = [], workers = [], bookings = [], id) {
    this.name = name;
    this.users = users;
    this.workers = workers;
    this.bookings = bookings;
    this.id = id;
  }
  registerUser(user) {
    this.users.push(user);
  }
  registerWorker(worker) {
    this.workers.push(worker);
  }
  createBooking(client, worker) {
    const foundClient = this.users.find((c) => client.email == c.email);
    const foundWorker = this.workers.find((w) => worker.email == w.email);

    if (foundClient && foundWorker) {
      const booking = new Booking(this, client, worker);
      client.reservations.push(booking);
      worker.bookings.push(booking);
    } else {
      throw new Error(
        "Either client or worker is not registered on " + this.name
      );
    }
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
