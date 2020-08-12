module.exports = class Complaint {
  constructor(client, worker, complaintMsg) {
    this.client = client;
    this.worker = worker;
    this.complaintmsg = complaintMsg;
  }
};
