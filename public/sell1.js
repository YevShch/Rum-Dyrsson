// import addBostad from "./sell-Back.js";
// import { addOne } from "./server-request.js"
// import NewBostad from "./newBostad.js";
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
<input type="number" id="price" name="price" min="50000" max="999000000" value="50000" step="10000" title="Pris ska vara sifror"/>
</section>
<br>

<section>
<label for="rooms">Antal rums:</label>
<input id="rooms" type="number" name="rooms" min="1" max="20" value="1" required/>
</section>
<br>

<section>
<label for="area">Boarea, kvm:</label>
<input id="area" type="number" name="area"  min="20" max="500" value="20" step = "5" required/>
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
<input id="floor" type="number" name="våning" min="1" max="30" value="1" required/>
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


<button onclick="saveBostad()">Spara</button>
  </form>
  <script>
 function saveBostad () {
  if ( $( "form" )[ 0 ].checkValidity() ) {
  let bostad = {
    type: $( '#type' ).val(),
    address: $( '#address' ).val(),
    city: $( '#city' ).val(),
    price: $( '#price' ).val(),
    rooms: $( '#rooms' ).val(),
    area: $( '#area' ).val(),
    balcony: $( '#balcony' ).val(),
    floor: $( '#floor' ).val(),
    elevator: $( '#elevator' ).val(),
    year: $( '#year' ).val(),
    storehouse: $( '#storehouse' ).val(),
    parking: $( '#parking' ).val(),
    garden: $( '#garden' ).val(),
    name: $( '#name' ).val(),
    email: $( '#email' ).val(),
    phone: $( '#phone' ).val()
  };
  console.log( bostad );
  // $.ajax({
  //   url:"http://localhost:3000/sell",
  //   type:"POST",
  //   data: JSON.stringify(bostad),
  //   contentType:"application/json;
  //   charset=utf-8",
  //   dataType: "json",
  //   succes: function(){
  //     alert("Bostadsdata har sparats!");
  //      $( '#type' ).val(""),
  //      $( '#address' ).val(""),
  //      $( '#city' ).val(""),
  //      $( '#price' ).val(""),
  //      $( '#rooms' ).val(""),
  //      $( '#area' ).val(""),
  //      $( '#balcony' ).val(""),
  //      $( '#floor' ).val(""),
  //      $( '#elevator' ).val(""),
  //      $( '#year' ).val(""),
  //      $( '#storehouse' ).val(""),
  //      $( '#parking' ).val(""),
  //      $( '#garden' ).val(""),
  //      $( '#name' ).val(""),
  //      $( '#lastName' ).val(""),
  //      $( '#email' ).val(""),
  //      $( '#phone' ).val("")
  //   }
  // })
  alert( "sell förfrågningen skapad!" );
      $( "form" )[ 0 ].reset()
}
}
  </script>

  </section>
  </section>
  `);
}


// function saveBostad () {
//   if ( $( "form" )[ 0 ].checkValidity() ) {
//     let bostad = {
//       type: $( '#type' ).val(),
//       address: $( '#address' ).val(),
//       city: $( '#city' ).val(),
//       price: $( '#price' ).val(),
//       rooms: $( '#rooms' ).val(),
//       area: $( '#area' ).val(),
//       balcony: $( '#balcony' ).val(),
//       floor: $( '#floor' ).val(),
//       elevator: $( '#elevator' ).val(),
//       year: $( '#year' ).val(),
//       storehouse: $( '#storehouse' ).val(),
//       parking: $( '#parking' ).val(),
//       garden: $( '#garden' ).val(),
//       name: $( '#name' ).val(),
//       email: $( '#email' ).val(),
//       phone: $( '#phone' ).val()
//     };
//     console.log( bostad );
//     // $.ajax({
//     //   url:"http://localhost:3000/sell",
//     //   type:"POST",
//     //   data: JSON.stringify(bostad),
//     //   contentType:"application/json;
//     //   charset=utf-8",
//     //   dataType: "json",
//     //   succes: function(){
//     //     alert("Bostadsdata har sparats!");
//     //      $( '#type' ).val(""),
//     //      $( '#address' ).val(""),
//     //      $( '#city' ).val(""),
//     //      $( '#price' ).val(""),
//     //      $( '#rooms' ).val(""),
//     //      $( '#area' ).val(""),
//     //      $( '#balcony' ).val(""),
//     //      $( '#floor' ).val(""),
//     //      $( '#elevator' ).val(""),
//     //      $( '#year' ).val(""),
//     //      $( '#storehouse' ).val(""),
//     //      $( '#parking' ).val(""),
//     //      $( '#garden' ).val(""),
//     //      $( '#name' ).val(""),
//     //      $( '#lastName' ).val(""),
//     //      $( '#email' ).val(""),
//     //      $( '#phone' ).val("")
//     //   }
//     // })
//     alert( "sell förfrågningen skapad!" );
//     $( "form" )[ 0 ].reset()
//   }
// }




// function saveBostad () {
//   if ( $( "form" )[ 0 ].checkValidity() ) {
//     let bostad = {
//       type: $( '#type' ).val(),
//       address: $( '#address' ).val(),
//       city: $( '#city' ).val(),
//       price: $( '#price' ).val(),
//       rooms: $( '#rooms' ).val(),
//       area: $( '#area' ).val(),
//       balcony: $( '#balcony' ).val(),
//       floor: $( '#floor' ).val(),
//       elevator: $( '#elevator' ).val(),
//       year: $( '#year' ).val(),
//       storehouse: $( '#storehouse' ).val(),
//       parking: $( '#parking' ).val(),
//       garden: $( '#garden' ).val(),
//       name: $( '#name' ).val(),
//       email: $( '#email' ).val(),
//       phone: $( '#phone' ).val()
//     };
//     console.log( bostad );
//     // $.ajax({
//     //   url:"http://localhost:3000/sell",
//     //   type:"POST",
//     //   data: JSON.stringify(bostad),
//     //   contentType:"application/json;
//     //   charset=utf-8",
//     //   dataType: "json",
//     //   succes: function(){
//     //     alert("Bostadsdata har sparats!");
//     //      $( '#type' ).val(""),
//     //      $( '#address' ).val(""),
//     //      $( '#city' ).val(""),
//     //      $( '#price' ).val(""),
//     //      $( '#rooms' ).val(""),
//     //      $( '#area' ).val(""),
//     //      $( '#balcony' ).val(""),
//     //      $( '#floor' ).val(""),
//     //      $( '#elevator' ).val(""),
//     //      $( '#year' ).val(""),
//     //      $( '#storehouse' ).val(""),
//     //      $( '#parking' ).val(""),
//     //      $( '#garden' ).val(""),
//     //      $( '#name' ).val(""),
//     //      $( '#lastName' ).val(""),
//     //      $( '#email' ).val(""),
//     //      $( '#phone' ).val("")
//     //   }
//   // })
//   alert( "sell förfrågningen skapad!" );
//   $( "form" )[ 0 ].reset()
// }
// }
