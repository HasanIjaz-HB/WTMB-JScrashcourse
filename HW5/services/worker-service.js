const BaseService = require("./base-service");
const WorkerModel = require("../models/worker");

class WorkerService extends BaseService {
  model = WorkerModel;
}

module.exports = new WorkerService();
