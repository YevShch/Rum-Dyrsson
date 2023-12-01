// import { addBostad } from "./server-request.js"

export async function addBostad () {
  let response = await fetch( '/data', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify( {
      "id": "1",
      "type": "vila",
      "address": "Blåbärsvägen 1",
      "city": "Malmö",
      "post": "23456",
      "price": "1000000",
      "rooms": "5",
      "area": "120",
      "balcony": "nej",
      "floor": "2",
      "elevator": "finns ej",
      "year": "2000",
      "storehouse": "finns",
      "parking": "parkeringplats",
      "garden": "finns",
      "description": "",
      "foto": "",
      "name": "Lars Larsson",
      "email": "test123@gmail.com",
      "phone": "0123456789"

    } )
  } )
  response = await response.json()
  console.log( response );
}

let bostad = {
  "id": "",
  "type": "",
  "address": "",
  "city": "",
  "post": "",
  "price": "",
  "rooms": "",
  "area": "",
  "balcony": "",
  "floor": "",
  "elevator": "",
  "year": "",
  "storehouse": "",
  "parking": "",
  "garden": "",
  "description": "",
  "foto": "",
  "name": "",
  "email": "",
  "phone": ""

}

$( "#saveHouse" ).click( function () {
  console.log( "post" );
  addBostad( bostad );
  console.log( bostad );
} );

$( 'input' ).on( 'change', function () {
  saveBostadData();
} );

function saveBostadData () {
  bostad.type = $( '#type' ).val();
  bostad.address = $( '#addres' ).val();
  bostad.city = $( '#city' ).val();
  bostad.post = $( '#post' ).val();
  bostad.price = $( '#price' ).val();
  bostad.rooms = $( '#rooms' ).val();
  bostad.area = $( '#area' ).val();
  bostad.balcony = $( '#balcony' ).val();
  bostad.floor = $( '#floor' ).val();
  bostad.elevator = $( '#elevator' ).val();
  bostad.year = $( '#year' ).val();
  bostad.storehouse = $( '#storehouse' ).val();
  bostad.parking = $( '#parking' ).val();
  bostad.garden = $( '#garden' ).val();
  bostad.description = $( '#description' ).val();
  bostad.foto = $( '#foto' ).val();
  bostad.name = $( '#name' ).val();
  bostad.email = $( '#email' ).val();
  bostad.phone = $( '#phone' ).val();
}






// const submitBtn = document.getElementById( 'saveHouse' )

// submitBtn.addEventListener( "click", function () {
//   console.log( "post" );
//   addBostad( bostad )
//   console.log( bostad );
// } )

// document.querySelector( 'input' ).addEventListener( 'change', saveBostadData );

// function saveBostadData () {
//   bostad.type = document.getElementById( 'type' ).value
//   bostad.address = document.getElementById( 'addres' ).value
//   bostad.city = document.getElementById( 'city' ).value
//   bostad.post = document.getElementById( 'post' ).value
//   bostad.price = document.getElementById( 'price' ).value
//   bostad.rooms = document.getElementById( 'rooms' ).value
//   bostad.area = document.getElementById( 'area' ).value
//   bostad.balcony = document.getElementById( 'balcony' ).value
//   bostad.floor = document.getElementById( 'floor' ).value
//   bostad.elevator = document.getElementById( 'elevator' ).value
//   bostad.year = document.getElementById( 'year' ).value
//   bostad.storehouse = document.getElementById( 'storehouse' ).value
//   bostad.parking = document.getElementById( 'parking' ).value
//   bostad.garden = document.getElementById( 'garden' ).value
//   bostad.description = document.getElementById( 'description' ).value
//   bostad.foto = document.getElementById( 'foto' ).value
//   bostad.name = document.getElementById( 'name' ).value
//   bostad.email = document.getElementById( 'email' ).value
//   bostad.phone = document.getElementById( 'phone' ).value
// }
