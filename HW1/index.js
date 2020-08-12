class User {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.reservations = [];
    this.complaints = [];
  }
  reserve(Booking) {
    this.reservations.push(Booking);
    Booking.worker.bookings.push(Booking);
  }
  printReservations() {
    console.log(this.name + " has booked the following workers:");
    this.reservations.forEach(printWorkerName);
  }
  printComplaintByClient() {
    console.log(
      this.name + " has filed complaints against the following workers:"
    );
    this.complaints.forEach(printWorkerName);
  }
}
const haris = new User("Haris", 35, "haris@xyz.com");
const sam = new User("Sam", 34, "sam@xyz.com");
class Worker {
  constructor(name, field, experience) {
    this.name = name;
    this.field = field;
    this.experience = experience;
    this.bookings = [];
    this.complaintlist = [];
  }
  clientComplain(complaint) {
    this.complaintlist.push(complaint);
    complaint.client.complaints.push(complaint);
  }
  printBookings() {
    console.log(this.name + " was booked the following clients:");
    this.bookings.forEach(printClientName);
  }
  printComplaints() {
    console.log(
      this.name + " has complaints filed by the following clients:"
    );
    this.complaintlist.forEach(printClientName);
  }
}
const tyler = new Worker("Tyler", "Plumbing", 5);
const langard = new Worker("Langard", "Electrician", 3);
class Platform {
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
    this.users.forEach(printName);
  }
  printWorkerNames() {
    console.log("The registered workers on the platform are:");
    this.workers.forEach(printName);
  }
}
printName = (obj) => console.log(obj.name);
printClientName= (obj) => console.log(obj.client.name)
printWorkerName= (obj) => console.log(obj.worker.name)
const workForce = new Platform("WORKFORCE");
workForce.registerUser(sam);
workForce.registerUser(haris);
workForce.registerWorker(tyler);
workForce.registerWorker(langard);
workForce.printUserNames();
workForce.printWorkerNames();
class Booking {
  constructor(platform, client, worker) {
    this.platform = platform;
    this.client = client;
    this.worker = worker;
    this.time = Date.now();
  }
}
const booking_1= new Booking(workForce,sam,tyler)
const booking_2= new Booking(workForce,sam,langard)
sam.reserve(booking_1)
sam.reserve(booking_2)
sam.printReservations();
const booking_3= new Booking(workForce,haris,tyler)
haris.reserve(booking_3);
haris.printReservations();
tyler.printBookings();
class Complaint {
  constructor(client, worker, complaintmsg) {
    this.client = client;
    this.worker = worker;
    this.complaintmsg = complaintmsg;
  }
}
const complain_1 = new Complaint(sam, tyler, "The worker didn't perform well");
tyler.clientComplain(complain_1)
tyler.printComplaints()
sam.printComplaintByClient()