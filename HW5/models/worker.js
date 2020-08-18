const mongoose = require("mongoose");

const WorkerSchema = new mongoose.Schema({
  name: String,
  field: String,
  experience: Number,
  email: String,
});

const WorkerModel = mongoose.model("Worker", WorkerSchema);
module.exports = WorkerModel;
// module.exports = class Worker {
//   constructor(
//     name,
//     category,
//     experience,
//     workerbookedby = [],
//     complaintlist = [],
//     id
//   ) {
//     this.name = name;
//     this.category = category;
//     this.email = experience;
//     this.workerbookedby = workerbookedby;
//     this.complaintlist = complaintlist;
//     this.id = id;
//   }
//   registerworker(platform) {
//     platform.workers.push(this);
//   }
//   // printworkersbookings() {
//   //   console.log(this.name + " was booked the following Workers:");
//   //   this.workerbookedby.forEach(printName);
//   // }
//   // printcomplaintsagainst() {
//   //   console.log(this.name + " has complaints filed by the following Workers:");
//   //   this.complaintlist.forEach(printName);
//   // }
//   static create({
//     name,
//     category,
//     experience,
//     workerbookedby,
//     complaintlist,
//     id,
//   }) {
//     return new Worker(
//       name,
//       category,
//       experience,
//       workerbookedby,
//       complaintlist,
//       id
//     );
//   }
// };
