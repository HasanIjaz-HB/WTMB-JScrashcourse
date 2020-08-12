module.exports = class Booking {
  constructor(platform, client, worker) {
    this.platform = platform;
    this.client = client;
    this.worker = worker;
    this.time = Date.now();
  }
};
