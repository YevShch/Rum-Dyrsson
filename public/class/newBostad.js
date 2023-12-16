export default class NewBostad {
  constructor(type, address, price, rooms, area, balcony, floor, elevator, year, storehouse, parking, garden, firstName, lastName, email, phone) {
    this.type = type;
    this.address = address;
    this.price = price;
    this.rooms = rooms;
    this.area = area;
    this.balcony = balcony;
    this.floor = floor;
    this.elevator = elevator;
    this.year = year;
    this.storehouse = storehouse;
    this.parking = parking;
    this.garden = garden;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
  }

  getPhoto(type) {
    switch (type) {
      case 'lägenhet':
        return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRGElIHM07zCr3loYfu1zODAsFI9y-hqb0DajmmtmgtpPDWcOFkdbTbkunPeUk2r01t6o&usqp=CAU"
      case 'villa':
        return "https://images.freeimages.com/clg/images/42/425484/illustration-of-house_f.jpg"
      case 'radhus':
        return "https://resources.mynewsdesk.com/image/upload/c_fill,dpr_auto,f_auto,g_auto,q_auto:good,w_746/zoehjutarkci1dzexwnz"
    }
  }

  dataInfo() {
    return {
      "id": 'id' + new Date().getTime(),
      "photo": this.getPhoto(this.type),
      "type": this.type,
      "address": this.address,
      "price": this.price,
      "rooms": this.rooms,
      "area": this.area,
      "balcony": this.balcony,
      "floor": this.floor,
      "elevator": this.elevator,
      "year": this.year,
      "storehouse": this.storehouse,
      "parking": this.parking,
      "garden": this.garden,
      "firstName": this.firstName,
      "lastName": this.lastName,
      "email": this.email,
      "phone": this.phone
    }
  }
}