const BaseService = require("./base-service");
const PlatformModel = require("../models/platform");

class PlatformService extends BaseService {
  model = PlatformModel;
}

module.exports = new PlatformService();
