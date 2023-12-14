import { getAll} from "../server-request.js"

export default async function buy () {
return $( `
   <div id="showResidence">
   <h1>Hitta ditt drömhem:</h1>
  <div>
  <form id="bostad">

    <section class="FiltreraBostad">
    <fieldset>
    <legend>Filtrera sökning:</legend>
    <div>
      <input type="radio" id="villa" name="villa" value="villa" />
      <label for="Hus">Villa</label>
      <input type="radio" id="flat" name="flat" value="flat" />
      <label for="Lägenhet">Lägenhet</label>
      <input type="radio" id="tomt" name="tomt" value="tomt" />
      <label for="Lägenhet">Tomt</label>
      <input type="radio" id="radhus" name="radhus" value="radhus" />
      <label for="Villa">Radhus</label>
      <br><br>

     <label for="sortOrder">Sortera efter:</label>
     <select id="sortOrder">
     <option value="priceAsc">Pris (Lägst överst)</option>
     <option value="priceDesc">Pris (Högst överst)</option>
     </select>
     <br><br>

     <button onclick="filterResidences()">Filtrera</button>

     <div id="showAllResidence">
     <div>
     </fieldset>
     </section>
  `);
}

  export async function getAllResidence () {
    $( document ).ready( async function () {
      const bostad = await getAll( "buy" );
      console.log( bostad )
      for ( let i = 0; i < bostad.length; i++ ) {
        const section = $( `
      <fieldset>
      <form id="showAllResidence ">
       
        <h2>${ bostad[ i ].address }</h2><h2>${ bostad[ i ].city }</h2>
       <img src="${ bostad[ i ].photo }" alt="beskrivning_av_bilden"style="width:200px;height:200px;cursor:pointer;">
         <p>Typ av bostad: ${ bostad[ i ].type }</p>
         <p>Pris: ${ bostad[ i ].price }</p>
         <p>Antal rum: ${ bostad[ i ].rooms }</p>
         <p>Boarea: ${ bostad[ i ].area }</p>

          <div id="intrest">
          <button id="intrest">Sckika intresse</button>
          </div>
        
        <button class="action-button" data-action="delete" value=${ bostad[ i ].id }>Hämta ID</button>
     
<script>
</script>
        </form>
      </fieldset>
     `)
        $( "#showAllResidence" ).append( section );
        
      }
    } )
}


                    



//  $( document ).ready( function () {

//  $( "#intresseForm" ).hide();
//  $( "#intrest" ).click( function () {
//  $( "#intresseForm" ).toggle();
//  } );
//  } );

//  $( "#intrest" ).append( form );

const form = $( `
<button id="button">Öppna formen</button>
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
    `);

  
export function addBuyEventListeners () {
  $( '#showAllResidence ' ).on( 'click', '.action-button', function () {
    console.log("Knappen fungerar!");
    const id = $( this ).val();
    const action = $( this ).data( 'action' );
    console.log( `Button clicked with id: ${ id } and action: ${ action }` );

  //   // Execute the async logic based on the button click
  //   if ( action === 'delete' ) {
  //     remove( id );
  //   }
  //   console.log( "end" )
  } );
}





