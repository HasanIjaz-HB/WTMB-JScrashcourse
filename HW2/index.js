const User = require("./user");
const Worker = require("./worker");
const Platform = require("./platform");
const Database = require("./database");
const haris = new User("Haris", 35, "haris@xyz.com");
const sam = new User("Sam", 34, "sam@xyz.com");
const tyler = new Worker("Tyler", "Plumbing", 5, "tyler@xyz.com");
const langard = new Worker("Langard", "Electrician", 3, "langard@xyz.com");

const workForce = new Platform("WORKFORCE");

workForce.registerUser(sam);
workForce.registerUser(haris);

workForce.registerWorker(tyler);
workForce.registerWorker(langard);

workForce.createBooking(sam, tyler);
workForce.createBooking(sam, langard);
workForce.createBooking(haris, tyler);

haris.printReservations();
tyler.printBookings();

tyler.createComplaintAgainst(sam, "The worker didn't perform well");
tyler.printCompaintsAgainstMe();
sam.printComplaintsByMe();

Database.save("users.json", { sam, haris });

const usersdb = Database.load("users.json");
console.log(usersdb);
