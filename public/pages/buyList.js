import { getAll, deleteOne, getOne } from "../server-request.js"

export default async function buyList () {
  if ( await checkLogIn() ) {
    window.location.href = "#login";
  }
  return $( `
   <div id="buyList">
  <div>
  `);
}

export async function getAllBuyData () {
  $( document ).ready( async function () {
    const bostad = await getAll( "buy" );
    console.log( bostad )
    const quantityBuy = $( `
    <h3>Du har ${ bostad.length } bostäder till salu</h3>
   `);
    $( "#buyList" ).append( quantityBuy );
    for ( let i = 0; i < bostad.length; i++ ) {
      const section = $( `
      <fieldset>
      <form id="showBuyList">
       
        <p><b><u>${ bostad[ i ].id }</p></b></u>
        <p>Foto: ${ bostad[ i ].photo }</p>
         <p>Typ av bostad: ${ bostad[ i ].type }</p>
         <p>Gatuadress: ${ bostad[ i ].address }</p> 
         <p>Ort: ${ bostad[ i ].city }</p>
         <p>Pris: ${ bostad[ i ].price }</p>
         <p>Antal rum: ${ bostad[ i ].rooms }</p>
         <p>Boarea: ${ bostad[ i ].area }</p>
         <p>Balkong: ${ bostad[ i ].balcony }</p>
         <p>Våningen: ${ bostad[ i ].floor }</p>
         <p>Hiss: ${ bostad[ i ].elevator }</p>
         <p>Byggnadsår: ${ bostad[ i ].year }</p>
         <p>Förråd: ${ bostad[ i ].storehouse }</p>
         <p>Parkeringplats: ${ bostad[ i ].parking }</p>
         <p>Innegård: ${ bostad[ i ].garden }</p>
         <p>Namn: ${ bostad[ i ].firstName }</p>
         <p>Efternamn: ${ bostad[ i ].lastName }</p>
         <p>Mejladress: ${ bostad[ i ].email }</p>
         <p>Telefonnummer: ${ bostad[ i ].phone }</p>
     
        <button class="action-button" data-action="delete" value=${ bostad[ i ].id }>Ta bort</button> 
   
      </form>
      </fieldset>
    `);
      $( "#buyList" ).append( section );
    }
  } )
}

export function buyButtonEventListeners () {
  $( '#buyList' ).on( 'click', '.action-button', function () {
    const id = $( this ).val();
    const action = $( this ).data( 'action' );
    console.log( `Button clicked with id: ${ id } and action: ${ action }` );

    // Execute the async logic based on the button click
    if ( action === 'delete' ) {
      remove( id );
    }
    console.log( "end" )
  } );
}

export async function remove ( id ) {
  try {
    await deleteOne( "buy", id );
    console.log( "Complete" );
  } catch ( error ) {
    console.error( 'Error in remove:', error );
  }
  window.location.reload()
}

async function checkLogIn () {
  const user = await getOne( "admin", 1 )
  console.log( user.logIn )
  if ( user.logIn === 0 ) {
    console.log( "true" )
    return true
  } else {
    console.log( "false" )
    return false
  }
}
