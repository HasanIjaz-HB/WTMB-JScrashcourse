const User = require("./models/user");
const Worker = require("./models/worker");
const Platform = require("./models/platform");
const UserService = require("./services/user-service");

console.log("Hello World!");

async function main() {
  const workForce = new Platform("WORKFORCE");
  const haris = new User("Haris", 35, "haris@xyz.com");
  const sam = new User("Sam", 34, "sam@xyz.com");
  const tyler = new Worker("Tyler", "Plumbing", 5, "tyler@xyz.com");
  const langard = new Worker("Langard", "Electrician", 3, "langard@xyz.com");

  workForce.registerUser(sam);
  workForce.registerUser(haris);

  workForce.registerWorker(tyler);
  workForce.registerWorker(langard);

  workForce.report();

  await UserService.add(sam);
  await UserService.add(haris);

  const user = await UserService.findAll();

  console.log(user[0].name);
  console.log(user[1].name);

  await UserService.del(1);

  const loadedUsers = await UserService.findAll();

  console.log("User with id 1 has been deleted.");
  console.log("The remaining users are: ");
  loadedUsers.forEach(user => console.log(user.name));
}

main();
