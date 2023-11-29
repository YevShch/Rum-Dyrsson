export default function sell () {
  return $( `
   <section id="title">
   <h1>Här kan du sälja din bostad med oss!</h1>
   </section>
  <section id="sell">
   
   <h3>Fyll i gärna ett formulär:</h3>

<section>
<label for="residence-select">Välj typ av bostad:</label>
<select name="residence" id="residence-select">
<option value="">--Välj gärna en option--</option>
<option value="lägenhet">Lägenhet</option>
<option value="vila">Vila</option>
<option value="tomt">Tomt</option>
</select>
<br>
</section>

<section>
<label for="adress">Adress:</label>
<input type="text" id="adress" required/>
<br>
</section>

<section>
<label for="ort">Ort:</label>
<input type="text" id="ort" required/>
<br>
</section>

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
<label for="balkong-select">Balkong:</label>
<select name="balkong" id="balokong-select">
<option value="">--Välj gärna en option--</option>
<option value="0">har ingen balkong</option>
<option value="1">jag har 1 balkong</option>
<option value="2">jag har 2 balkonger</option>
</select>
<br>
</section>

<section>
<label for="floor">Våning(för lägenheter):</label>
<input id="floor" type="number" name="våning" value="0" />
<br>
</section>

<section>
<label for="hiss-select">Hiss:</label>
<select name="hiss" id="hiss-select">
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
<label for="storehouse-select">Förråd:</label>
<select name="storehouse" id="storehouse-select">
<option value="">--Välj gärna en option--</option>
<option value="ej">finns ej</option>
<option value="ja">finns</option>
</select>
<br>
</section>

<section>
<label for="parking-select">Parkering:</label>
<select name="parking" id="parking-select">
<option value="">--Välj gärna en option--</option>
<option value="ej">finns ej</option>
<option value="ja1">parkeringplats i bostadsområde</option>
<option value="ja2">parkeringplats undertaket</option>
</select>
<br>
</section>

<section>
<label for="garden-select">Innegård:</label>
<select name="garden" id="garden-select">
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
<label for="picture">Ladda ner en bild på din bostad:</label>
<input type="file" id="pictures" name="picture" accept="image/png, image/jpeg" />
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
<input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
<small>Format: 123-456-7890</small>
<br>
</section>

<section>
<input type="button" id="saveHouse" value="Spara" />
</section>
  </section>
  `);
}
