const BaseService = require("./base-service");
const WorkerModel = require("../models/worker");

class WorkerService extends BaseService {
  constructor() {
    super(WorkerModel, `${__dirname}/../worker-database.json`);
  }
}

module.exports = new WorkerService();
