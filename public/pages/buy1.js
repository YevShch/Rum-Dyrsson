$( document ).ready( function () {
  $( "#intresseForm" ).hide();
  $( "#intrest" ).click( function () {
    $( "#intresseForm" ).toggle();
  } );
} );

const form = $( `
          < button id = "button" > Öppna formen</button >
        <form id="form">
          <label for="name">Namn:</label>
          <input type="text" id="name" name="name"><br><br>
            <label for="address">Adress:</label>
            <input type="text" id="address" name="address"><br><br>
              <label for="phone">Telefonnummer:</label>
              <input type="text" id="phone" name="phone"><br><br>
                <label for="email">Mejladress:</label>
                <input type="text" id="email" name="email"><br><br>
                  <label for="message">Meddelande:</label>
                  <textarea id="message" name="message"></textarea><br><br>
                    <button type="submit">Skicka</button>
                    <button type="button" id="close">Close</button>
                  </form>
` );



// Lägg till formuläret i DOM
$( 'body' ).append( form );



$( "#intrest" ).append( form );

