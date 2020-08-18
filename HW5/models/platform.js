const mongoose = require("mongoose");

const PlatformSchema = new mongoose.Schema({
  name: String,
});
// module.exports = class platform {
//   constructor(name, users = [], workers = [], bookings = [], id) {
//     this.name = name;
//     this.users = users;
//     this.workers = workers;
//     this.bookings = bookings;
//     this.id = id;
//   }

//   report() {
//     console.log(
//       chalk.blue.bgRed.bold(this.name),
//       "platform contains",
//       chalk.green(this.users.length),
//       "users",
//       "and number of workers are",
//       this.workers.length
//     );
//   }

//   static create({ name, users, workers, bookings, id }) {
//     return new platform(name, users, workers, bookings, id);
//   }
// };

const PlatformModel = mongoose.model("Platform", PlatformSchema);
module.exports = PlatformModel;
