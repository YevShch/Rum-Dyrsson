// import addBostad from "./sell-Back.js";
import { addOne } from "./server-request.js"
import NewBostad from "./newBostad.js";
// import { invalidOption, notANumber, invalidPostNumber, invalidYear, invalidEmail } from "./check.js"
// let errorMsg = []

export default function sell () {
  return $( `
  <section id="sellPage">

  <section id="image"> 
   <section id="sellTitle">
   <h1>Sälj din bostad med oss!</h1>
   <h2>Vänligen fyll i formuläret:</h2>
   </section>

    // <form id="sell"> 
   <form id="sell">
    <section>
<label for="type">Typ av bostad:</label>
<select name="residence" id="type" required>
<option value="">--Välj gärna en option--</option>
<option value="lägenhet">Lägenhet</option>
<option value="villa">Villa</option>
<option value="radhus">Radhus</option>
<option value="tomt">Tomt</option>
</select>
</section>
<br>

<section>
<label for="address">Adress:</label>
<input type="text" id="address" required/>
</section>
<br>

<section>
<label for="city">Ort:</label>
<input type="text" id="city" pattern="[A-Za-z]+" required/>
</section>
<br>

<section>
<label for="price">Utgångspis:</label>
<input type="text" id="price" name="price" title="Pris ska vara sifror"/>
</section>
<br>

<section>
<label for="rooms">Antal rums:</label>
<input id="rooms" type="number" name="rooms" value="1" required/>
</section>
<br>

<section>
<label for="area">Boarea, kvm:</label>
<input id="area" type="number" name="area" value="20" step = "5" required/>
</section>
<br>

<section>
<label for="balcony">Balkong:</label>
<select name="balkong" id="balcony" required>
<option value="">--Välj gärna en option--</option>
<option value="finns ej">finns ej</option>
<option value="finns en balkong">finns en balkong</option>
<option value="finns två balkonger">finns två balkonger</option>
</select>
</section>
<br>

<section>
<label for="floor">Våning(för lägenheter):</label>
<input id="floor" type="number" name="våning" value="1" required/>
</section>
<br>

<section>
<label for="elevator">Hiss:</label>
<select name="hiss" id="elevator" required>
<option value="">--Välj gärna en option--</option>
<option value="finns ej">finns ej</option>
<option value="finns">finns</option>
</select>
</section>
<br>

<section>
<label for="year">Byggnadsår:</label>
<input type="number" id="year" name="year" min="1800" max="2023" pattern="[1-9][0-9]{3}" required/>
</section>
<br>

<section>
<label for="storehouse">Förråd:</label>
<select name="storehouse" id="storehouse" required>
<option value="">--Välj gärna en option--</option>
<option value="finns ej">finns ej</option>
<option value="finns">finns</option>
</select>
</section>
<br>

<section>
<label for="parking">Parkering:</label>
<select name="parking" id="parking" required>
<option value="">--Välj gärna en option--</option>
<option value="finns ej">finns ej</option>
<option value="finns, utomhus">parkeringplats utomhus</option>
<option value="finns, under taket">parkeringplats under taket</option>
</select>
</section>
<br>

<section>
<label for="garden">Innegård:</label>
<select name="garden" id="garden" required>
<option value="">--Välj gärna en option--</option>
<option value="finns ej">finns ej</option>
<option value="finns">finns</option>
</select>
</section>
<br>

<section>
<label for="name">Namn: </label>
<input type="text" name="name" id="name" pattern="[A-Za-z]+" required />
</section>
<br>

<section>
<label for="lastName">Efternamn: </label>
<input type="text" name="lastName" id="lastName" pattern="[A-Za-z]+" required />
</section>
<br>

<section>
<label for="email">Mejladress: </label>
 <input type="email" id="email" required />
</section>
<br>

<section>
<label for="phone">Telefonnummer:</label>
<input type="tel" id="phone" name="phone"  required />
</section>
<br>

<input type="button" id="saveHouse" value="Spara" />

  </form>

  <script>


  $.when(
    $.getScript("public/sell-Back.js"),
  ).done(function()){

$( 'input' ).on( 'change', function () {
  addBostad();
  console.log( bostad );
} );


 

  </script>

  </section>
  </section>
  `);
}


// function saveBostad () {
//   let type = $( '#type' ).val();
//   let address = $( '#address' ).val();
//   let city = $( '#city' ).val();
//   let price = $( '#price' ).val();
//   let rooms = $( '#rooms' ).val();
//   let area = $( '#area' ).val();
//   let balcony = $( '#balcony' ).val();
//   let floor = $( '#floor' ).val();
//   let elevator = $( '#elevator' ).val();
//   let year = $( '#year' ).val();
//   let storehouse = $( '#storehouse' ).val();
//   let parking = $( '#parking' ).val();
//   let garden = $( '#garden' ).val();
//   let name = $( '#name' ).val();
//   let lastName = $( '#lastName' ).val();
//   let email = $( '#email' ).val();
//   let phone = $( '#phone' ).val();

//   if ( type && address && city && price && rooms && area && balcony && floor && elevator && year && storehouse && parking && garden && name && lastName && email && phone ) {
//     let bostad = {
//       type: type,
//       address: address,
//       city: city,
//       price: price,
//       rooms: rooms,
//       area: area,
//       balcony: balcony,
//       floor: floor,
//       elevator: elevator,
//       year: year,
//       storehouse: storehouse,
//       parking: parking,
//       garden: garden,
//       name: name,
//       lastname: lastName,
//       email: email,
//       phone: phone
//     };
//     console.log( bostad );
//   }
// }




// $( document ).ready( function () {
//   $( "#saveBostad" ).click( function () {
//     if ( $( "form" )[ 0 ].checkValidity() ) {
//       let bostad = {
//         type: $( '#type' ).val(),
//         address: $( '#address' ).val(),
//         city: $( '#city' ).val(),
//         price: $( '#price' ).val(),
//         rooms: $( '#rooms' ).val(),
//         area: $( '#area' ).val(),
//         balcony: $( '#balcony' ).val(),
//         floor: $( '#floor' ).val(),
//         elevator: $( '#elevator' ).val(),
//         year: $( '#year' ).val(),
//         storehouse: $( '#storehouse' ).val(),
//         parking: $( '#parking' ).val(),
//         garden: $( '#garden' ).val(),
//         name: $( '#name' ).val(),
//         lastName: $( '#lastName' ).val(),
//         email: $( '#email' ).val(),
//         phone: $( '#phone' ).val()
//       };
//       console.log( bostad );
//       console.log( "new bostad are created!" );
//       // const bostad = new NewBostad( type, address, city, price, rooms, area, balcony, floor, elevator, year, storehouse, parking, garden, sellerName, email, phone )
//       // addOne( "sell", bostad.dataInfo() );
//       alert( "sell förfrågningen skapad!" );
//       $( "form" )[ 0 ].reset()
//     } else {
//       alert( "Vänligen fyll i alla fälten korrekt" );
//     }
//   } );
// } );







// export function addSellsEventlistner () {
//   $( "#sell" ).on( "submit", function ( event) {
//     event.preventDefault()
//     console.log( "Hej!" );
//     alert( "Nu är vi inne!" ) 
//   })
// } 


// $( 'input' ).on( 'change', function () {
//   saveBostadData();
//   console.log( bostad );
// } );

    



