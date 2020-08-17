module.exports = class Worker {
  constructor(
    name,
    field,
    experience,
    email,
    bookings = [],
    complaintList = [],
    id
  ) {
    this.name = name;
    this.field = field;
    this.email = email;
    this.experience = experience;
    this.bookings = bookings;
    this.complaintList = complaintList;
    this.id = id;
  }
  createComplaintAgainst(client, text) {
    const complaint = new Complaint(client, this, text);
    this.complaintlist.push(complaint);
    complaint.client.complaints.push(complaint);
  }
  static create({
    name,
    field,
    email,
    experience,
    bookings,
    complaintList,
    id,
  }) {
    return new Worker(
      name,
      field,
      email,
      experience,
      bookings,
      complaintList,
      id
    );
  }
};
