import { addOne } from "../server-request.js";
import NewMessage from "../class/newMessage.js";

export default function contact () {
  return $( `
  <div id="contactPage">

  <div id="image"> 
   <section id="contactTitle">
   <h1>På Dhyr&Rumsson vet vi vad som krävs för att göra en riktigt bra bostadsaffär.</h1>
   <h2>Fyll i formuläret så kontaktar vi dig inom kort.</h2>
   </section>

   <form id="contact">
    <section>
<section>
<label for="name">Namn: </label>
<input type="text" name="name" id="name" pattern="[A-Za-zÅåÄäÖö]+" required />
</section>
<br>

<section>
<label for="lastName">Efternamn: </label>
<input type="text" name="lastName" id="lastName" pattern="[A-Za-zÅåÄäÖö]+" required />
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

<section>
<label for="address">Gatuadress:</label>
<input type="text" id="address" required/>
</section>
<br>

<section>
<label for="city">Ort:</label>
<input type="text" id="city" pattern="[A-Za-zÅåÄäÖö]+" required/>
</section>
<br>

<section>
<label for="about">Ämne:</label>
<select name="about" id="about" required>
<option value="">--Välj gärna en option--</option>
<option value="Köpförfrågning">Köpa bostad</option>
<option value="Värdera bostad">Värdera bostad</option>
<option value="Sälja bostad">Sälja bostad</option>
<option value="Boka rådgivning">Boka rådgivning</option>
<option value="Allmänna frågor">Allmänna frågor</option>
</select>
</section>
<br>

<section>
<label for="message">Meddelande:</label>
<input type="text" id="message" size="10" required />
</section>
<br>

<button type="submit">Spara</button>
  </form>
    </div>

  </div>
  `);
}

export function addMessage () {
  $( "#contact" ).on( "submit", function ( event ) {
    event.preventDefault()
    console.log( "Knappen fungerar!" )
    let name = $( '#name' ).val();
    let lastName = $( '#lastName' ).val();
    let email = $( '#email' ).val();
    let phone = $( '#phone' ).val();
    let address = $( '#address' ).val();
    let city = $( '#city' ).val();
    let about = $( '#about' ).val();
    let message = $( '#message' ).val();



    console.log( "new meddelande har lagts!" );

    let contact = new NewMessage( name, lastName, email, phone, address, city, about, message )
    console.log( contact );
    addOne( "message", contact.messageInfo() );

    alert( "Meddelande har skickats!" );

    $( "form" )[ 0 ].reset()
    console.log( "Meddelande har skickats!" );
  }
  );
}

