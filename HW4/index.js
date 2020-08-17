const express = require("express");
const bodyParser = require("body-parser");

const userService = require("./services/user-service");
const platformService = require("./services/platform-service");
const workerService = require("./services/worker-service");

const app = express();

app.set("view engine", "pug");
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/platform/all", async (req, res) => {
  const platforms = await platformService.findAll();
  res.render("platform", { platforms });
});
app.get("/platform/:id", async (req, res) => {
  const platform = await platformService.find(req.params.id);
  res.send(platform);
});
app.post("/platform", async (req, res) => {
  const platform = await platformService.add(req.body);
  res.send(platform);
});
app.delete("/platform/:id", async (req, res) => {
  const platform = await platformService.del(req.params.id);
  res.send(platform);
});

app.get("/user/all", async (req, res) => {
  const users = await userService.findAll();
  res.render("user", { users });
});
app.get("/user/:id", async (req, res) => {
  const user = await userService.find(req.params.id);
  res.send(user);
});
app.post("/user", async (req, res) => {
  const user = await userService.add(req.body);
  res.send(user);
});
app.delete("/user/:id", async (req, res) => {
  const user = await userService.del(req.params.id);
  res.send(user);
});

app.get("/worker/all", async (req, res) => {
  const workers = await workerService.findAll();
  res.render("worker", { workers });
});
app.get("/worker/:id", async (req, res) => {
  const worker = await workerService.find(req.params.id);
  res.send(worker);
});
app.post("/worker", async (req, res) => {
  const worker = await workerService.add(req.body);
  res.send(worker);
});
app.delete("/worker/:id", async (req, res) => {
  const worker = await workerService.del(req.params.id);
  res.send(worker);
});

app.listen(3000, () => {
  console.log("Server listening at port 3000");
});
