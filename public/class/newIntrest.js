export default class NewIntrest {
  constructor(bostadID, address, name, phone, email) {
    this.id = bostadID;
    this.address = address;
    this.name = name;
    this.phone = phone;
    this.email = email;
  }

  dataInfo() {
    return {
      "id": 'id' + new Date().getTime(),
      "bostadID": this.id,
      "address": this.address,
      "name": this.name,
      "phone": this.phone,
      "email": this.email
    }
  }
}