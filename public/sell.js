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

    // <form id="sell" action="javascript:alert("A!")"> 
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
<label for="post">Postnummer:</label>
<input type="text" id="post" name="post" required pattern="[0-9]{5}" title="Postnummer ska vara 5 sifror"/>
<br>
</section>

<section>
<label for="price">Utgångspis:</label>
<input type="text" id="price" name="price" required pattern="[0-9]{9}" title="Pris ska vara sifror"/>
<br>
</section>

<section>
<label for="rooms">Antal rums:</label>
<input id="rooms" type="number" name="rooms" value="1" required/>
<br>
</section>

<section>
<label for="area">Boarea, kvm:</label>
<input id="area" type="number" name="area" value="20" step = "5" required/>
<br>
</section>

<section>
<label for="balcony">Balkong:</label>
<select name="balkong" id="balcony" required>
<option value="">--Välj gärna en option--</option>
<option value="finns ej">finns ej</option>
<option value="finns en balkong">finns en balkong</option>
<option value="finns två balkonger">finns två balkonger</option>
</select>
<br>
</section>

<section>
<label for="floor">Våning(för lägenheter):</label>
<input id="floor" type="number" name="våning" value="1" required/>
<br>
</section>

<section>
<label for="elevator">Hiss:</label>
<select name="hiss" id="elevator" required>
<option value="">--Välj gärna en option--</option>
<option value="finns ej">finns ej</option>
<option value="finns">finns</option>
</select>
<br>
</section>

<section>
<label for="year">Byggnadsår:</label>
<input id="year" type="text" name="year" required/>
<input type="date" id="year" name="year" min="1800" max="2023">
<br>
</section>

<section>
<label for="storehouse">Förråd:</label>
<select name="storehouse" id="storehouse" required>
<option value="">--Välj gärna en option--</option>
<option value="finns ej">finns ej</option>
<option value="finns">finns</option>
</select>
<br>
</section>

<section>
<label for="parking">Parkering:</label>
<select name="parking" id="parking" required>
<option value="">--Välj gärna en option--</option>
<option value="finns ej">finns ej</option>
<option value="finns, utomhus">parkeringplats utomhus</option>
<option value="finns, under taket">parkeringplats under taket</option>
</select>
<br>
</section>

<section>
<label for="garden">Innegård:</label>
<select name="garden" id="garden" required>
<option value="">--Välj gärna en option--</option>
<option value="finns ej">finns ej</option>
<option value="finns">finns</option>
</select>
<br>
</section>

<section>
<label for="description">Beskrivning av bostaden (4 to 300 tecken):</label>
<input type="text" id="description" name="description" required minlength="4" maxlength="300" size="10" required/>
<br>
</section>

<section>
<label for="foto">Ladda ner en bild:</label>
<input type="file" id="foto" name="picture" accept="image/png, image/jpeg" />
<br>
</section>

<section>
<label for="name">Namn: </label>
<input type="text" name="name" id="name" pattern="[A-Za-z]+" required />
<br>
</section>

<section>
<label for="lastName">Efternamn: </label>
<input type="text" name="name" id="lastName" pattern="[A-Za-z]+" required />
<br>
</section>

<section>
<label for="email">Mejladress: </label>
 <input type="email" id="email" required />
<br>
</section>

<section>
<label for="phone">Ditt telefonnummer:</label>
<input type="tel" id="phone" name="phone"  required />
<br>
</section>



<button onclick="saveBostad()">Spara</button>

  </form>

  <script>
 function saveBostad () {
  let bostad = {
    type: $( '#type' ).val(),
    address: $( '#address' ).val(),
    city: $( '#city' ).val(),
    post: $( '#post' ).val(),
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
    description: $( '#description' ).val(),
    foto: $( '#foto' ).val(),
    name: $( '#name' ).val(),
    email: $( '#email' ).val(),
    phone: $( '#phone' ).val()
  };
  console.log( bostad );
}


     
  </script>
  </section>
  </section>
  `);
}


function addBostad () {
  console.log( "Vi kommit in!" );
  errorMsg = []
  const type = $( '#type' ).val();
  if ( invalidOption( type ) ) { errorMsg.push( "Typ av bostad måste väljas!" ) }
  const address = $( '#addres' ).val();
  const city = $( '#city' ).val();
  const post = $( '#post' ).val();
  if ( notANumber( post ) ) { errorMsg.push( "postnummer kan bara innehålla siffor" ) }
  if ( invalidPostNumber( post ) ) { errorMsg.push( "Postnummer måste vara 5 siffror" ) }
  const price = $( '#price' ).val();
  if ( notANumber( price ) ) { errorMsg.push( "Utgångspriset kan bara innehålla siffor" ) }
  const rooms = $( '#rooms' ).val();
  const area = $( '#area' ).val();
  const balcony = $( '#balcony' ).val();
  if ( invalidOption( balcony ) ) { errorMsg.push( "Antal balkong måste väljas!" ) }
  const floor = $( '#floor' ).val();
  const elevator = $( '#elevator' ).val();
  const year = $( '#year' ).val();
  if ( invalidYear( year ) ) { errorMsg.push( "Byggnadsår måste vara på 4 siffror!" ) }
  const storehouse = $( '#storehouse' ).val();
  if ( invalidOption( storehouse ) ) { errorMsg.push( "Förråd val måste väljas!" ) }
  const parking = $( '#parking' ).val();
  if ( invalidOption( parking ) ) { errorMsg.push( "Parkerings val måste väljas!" ) }
  const garden = $( '#garden' ).val();
  if ( invalidOption( garden ) ) { errorMsg.push( "Innegård val måste väljas!" ) }
  const description = $( '#description' ).val();
  const sellerName = $( '#name' ).val();
  const email = $( '#email' ).val();
  if ( invalidEmail( email ) ) { errorMsg.push( "Email måste innehålla ett @" ) }
  const phone = $( '#phone' ).val();
  if ( notANumber( phone ) ) { errorMsg.push( "Telefonnummer kan bara innehålla siffor" ) }

  if ( errorMsg.length != 0 ) {
    alert( errorMsg )
  } else {
    console.log( "new bostad are created!" );
    const bostad = new NewBostad( type, address, city, post, price, rooms, area, balcony, floor, elevator, year, storehouse, parking, garden, description, sellerName, email, phone )
    addOne( "sell", bostad.dataInfo() );
    alert( "sell förfrågningen skapad!" );
    console.log( bostad )
    // }
  }

};






export function addSellsEventlistner () {
  $( "#sell" ).on( "submit", function ( ) {
    // event.preventDefault()
 
    $( 'input' ).on( 'change', function () {
      saveBostadData();
      console.log(bostad);
    } );
    console.log( "Hej!" );
    alert( "Nu är vi inne!" ) 
  })
} 




    



// $( "#sell" ).on( "submit", function ( event ) {
//   console.log( "Hej!" );
//   event.preventDefault();
//   alert( "Nu är vi inne!" )
// } )


