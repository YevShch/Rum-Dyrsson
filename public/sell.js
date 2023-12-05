// import addBostad from "./sell-Back.js";


export default function sell () {
  return $( `
  <section id="sellPage">

  <section id="image"> 
   <section id="sellTitle">
   <h1>Sälj din bostad med oss!</h1>
   <h2>Vänligen fyll i formuläret:</h2>
   </section>

    <form id="sell" action="javascript:alert("A!")"> 
   
    <section>
<label for="residence">Typ av bostad:</label>
<select name="residence" id="residence">
<option value="">--Välj gärna en option--</option>
<option value="lägenhet">Lägenhet</option>

<option value="villa">Villa</option>
<option value="radhus">Radhus</option>
>>>>>>> Stashed changes
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
<input type="text" id="city" required/>
</section>
<br>

<section>
<label for="post">Postnummer:</label>
<input type="text" id="post" required/>
<br>
</section>

<section>
<label for="price">Utgångspis:</label>
<input type="text" id="price" name="price" required/>
<br>
</section>

<section>
<label for="rooms">Antal rums:</label>
<input id="rooms" type="number" name="rooms" value="0" />
<br>
</section>

<section>
<label for="area">Boarea, kvm:</label>
<input id="area" type="number" name="area" value="20" step = "5"/>
<br>
</section>

<section>
<label for="balcony">Balkong:</label>
<select name="balkong" id="balcony">
<option value="">--Välj gärna en option--</option>
<option value="0">finns ej</option>
<option value="1">finns en balkong</option>
<option value="2">finns två balkonger</option>
</select>
<br>
</section>

<section>
<label for="floor">Våning(för lägenheter):</label>
<input id="floor" type="number" name="våning" value="0" />
<br>
</section>

<section>
<label for="elevator">Hiss:</label>
<select name="hiss" id="elevator">
<option value="">--Välj gärna en option--</option>
<option value="ej">finns ej</option>
<option value="ja">finns</option>
</select>
<br>
</section>

<section>
<label for="year">Byggnadsår:</label>
<input id="year" type="text" name="year"/>
<br>
</section>

<section>
<label for="storehouse">Förråd:</label>
<select name="storehouse" id="storehouse">
<option value="">--Välj gärna en option--</option>
<option value="ej">finns ej</option>
<option value="ja">finns</option>
</select>
<br>
</section>

<section>
<label for="parking">Parkering:</label>
<select name="parking" id="parking">
<option value="">--Välj gärna en option--</option>
<option value="ej">finns ej</option>
<option value="ja1">parkeringplats utomhus</option>
<option value="ja2">parkeringplats under taket</option>
</select>
<br>
</section>

<section>
<label for="garden">Innegård:</label>
<select name="garden" id="garden">
<option value="">--Välj gärna en option--</option>
<option value="ej">finns ej</option>
<option value="ja">finns</option>
</select>
<br>
</section>

<section>
<label for="description">Beskrivning av bostaden, friviligt (4 to 300 tecken):</label>
<input type="text" id="description" name="description" required minlength="4" maxlength="300" size="10" />
<br>
</section>

<section>
<label for="foto">Ladda ner en bild:</label>
<input type="file" id="foto" name="picture" accept="image/png, image/jpeg" />
<br>
</section>

<section>
<label for="name">Ditt namn: </label>
<input type="text" name="name" id="name" required />
<br>
</section>

<section>
<label for="email">Din mejladress: </label>
<input type="email" name="email" id="email" required />
<br>
</section>

<section>
<label for="phone">Ditt telefonnummer:</label>
<input type="tel" id="phone" name="phone"  required />
<br>
</section>



<input type="submit" id="saveHouse" value="Spara" />

  </form>
  </section>
  </section>
  `);
}

export function addSellsEventlistner () {
  $( "#sell" ).on( "submit", function ( event ) {
    event.preventDefault();
    console.log( "Hej!" );
    alert( "Nu är vi inne!" ) 
  })
} 

    



