const express = require("express");
const router = express.Router();

const PlatformService = require("../services/platform-service");

router.get("/all", async (req, res) => {
  const platforms = await PlatformService.findAll();
  res.render("list", { items: platforms });
});

router.get("/:id", async (req, res) => {
  const platform = await PlatformService.find(req.params.id);
  res.render("data", { data: platform });
});

router.post("/", async (req, res) => {
  const platform = await PlatformService.add(req.body);
  res.send(platform);
});

router.delete("/:id", async (req, res) => {
  const platform = await PlatformService.del(req.params.id);
  res.send(platform);
});

module.exports = router;
