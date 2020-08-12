const lib = require("./lib");
const Booking = require("./booking");
module.exports = class Platform {
  constructor(name) {
    this.name = name;
    this.users = [];
    this.workers = [];
  }
  registerUser(user) {
    this.users.push(user);
  }
  registerWorker(worker) {
    this.workers.push(worker);
  }
  printUserNames() {
    console.log("The registered users on the platform are:");
    this.users.forEach(lib.printName);
  }
  printWorkerNames() {
    console.log("The registered workers on the platform are:");
    this.workers.forEach(lib.printName);
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
};
