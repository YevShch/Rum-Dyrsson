export default class NewMessage {
  constructor ( name, lastName, email, phone, address, city, about, message ) {
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.address = address;
    this.city = city;
    this.about = about;
    this.message = message;
  }

  messageInfo () {
    return {
      "id": 'id' + new Date().getTime(),
      "name": this.name,
      "lastName": this.lastName,
      "email": this.email,
      "phone": this.phone,
      "address": this.address,
      "city": this.city,
      "about": this.about,
      "message": this.message 
    }
  }
}
