const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://localhost/hw5", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("connected");
}

main();
