function filterResidences () {
  $( document ).ready( async function () {
    const bostad = await getAll( "buy" );
    console.log( bostad )
    let sort = $( '#sortBy' ).val()
    console.log( "sort price" )
    if ( sort === "minUp" ) {
      sortedArray = bostad.sort( ( a, b ) => a.price - b.price )
      console.log();
    } else if ( sort === "maxUp" ) {
      sortedArray = bostad.sort( ( a, b ) => b.price - a.price )
    }
    
  } )
  


  updateBySort()
  filterBy( data, type )
}

function updateBySort () {
  sortedArray = []
  let data = getAllBuyData()
  let sort = $( '#sortBy' ).val()
  console.log( "sort price" )
  sortedArray = data.sort( ( a, b ) => a.price - b.price )
}

function filterBy ( data, type ) {
  for ( let i = 0; i < data.length; i++ ) {
    if ( data[ i ].type === type ) {
      sortedArray.push( data[ i ] )
    }
  }
}




export async function getAllResidence () {
  $( document ).ready( async function () {
    const bostad = await getAll( "buy" );
    console.log( bostad )

    for ( let i = 0; i < bostad.length; i++ ) {
      const section = $( `
       <div id="sort">
       <form id="showResidence">
       <fieldset>
         <form id="showDetail">
        <h2>${ bostad[ i ].address }</h2><h2>${ bostad[ i ].city }</h2>
       <img src="${ bostad[ i ].photo }" alt="beskrivning_av_bilden"style="width:200px;height:200px;cursor:pointer;">
         <p>Typ av bostad: ${ bostad[ i ].type }</p>
         <p>Pris: ${ bostad[ i ].price }</p>
         <p>Antal rum: ${ bostad[ i ].rooms }</p>
         <p>Boarea: ${ bostad[ i ].area }</p>
        
        <button type="submit" id="showDetail">Visa bostad</button>

        <button class="action-button" data-action="delete" value=${ bostad[ i ].id }>Hämta ID</button> 
        </form>
        </fieldset>
      </form>
      </div>
    `);
      $( "#showResidence" ).append( section );
    }
  } )
}















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

