module.exports = class Worker {
  constructor(
    name,
    category,
    experience,
    workerbookedby = [],
    complaintlist = [],
    id
  ) {
    this.name = name;
    this.category = category;
    this.email = experience;
    this.workerbookedby = workerbookedby;
    this.complaintlist = complaintlist;
    this.id = id;
  }
  registerworker(platform) {
    platform.workers.push(this);
  }
  // printworkersbookings() {
  //   console.log(this.name + " was booked the following users:");
  //   this.workerbookedby.forEach(printName);
  // }
  // printcomplaintsagainst() {
  //   console.log(this.name + " has complaints filed by the following users:");
  //   this.complaintlist.forEach(printName);
  // }
  static create({
    name,
    category,
    experience,
    workerbookedby,
    complaintlist,
    id,
  }) {
    return new Worker(
      name,
      category,
      experience,
      workerbookedby,
      complaintlist,
      id
    );
  }
};
