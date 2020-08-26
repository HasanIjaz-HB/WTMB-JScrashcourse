const express = require("express");
const bodyParser = require("body-parser");

const userRouter = require("./routes/user");
const workerRouter = require("./routes/worker");
const platformRouter = require("./routes/platform");

require("./mongo-connection");

const app = express();

app.set("view engine", "pug");
app.use(bodyParser.json());

app.use("/user", userRouter);
app.use("/worker", workerRouter);
app.use("/platform", platformRouter);

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000, () => {
  console.log("Server listening");
});
