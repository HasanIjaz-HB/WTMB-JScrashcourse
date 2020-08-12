const chalk = require("chalk");
const printName = (obj) => console.log(chalk.bold.black(obj.name));
const printClientName = (obj) => console.log(chalk.bold.black(obj.client.name));
const printWorkerName = (obj) => console.log(chalk.bold.black(obj.worker.name));

module.exports = { printName, printClientName, printWorkerName };
