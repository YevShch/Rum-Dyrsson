import { getAll, getOne, deleteOne } from "../server-request.js";


export default async function messageList () {
  if ( await checkLogIn() ) {
    window.location.href = "#login";
  }
  return $( `
  <div id="messageList">
  <div>
  `);
}

export async function getAllMessages () {
  $( document ).ready( async function () {
    const message = await getAll( "message" );
    console.log( message )
    const quantityMess = $( `
    <h3>Du har ${  message.length } meddelande</h3>
   `);
    $( "#messageList" ).append( quantityMess  );
    for ( let i = 0; i < message.length; i++ ) {
      const section = $( `
      <fieldset>
     <form id="showMessageList">
       <fieldset>
        <p><b><u>${ message[ i ].about }</u></b></p>
        <p>${ message[ i ].id }</p>
        <p>Namn: ${ message[ i ].name }</p>
         <p>Efternamn: ${ message[ i ].lastName }</p>
         <p>Mejladress: ${ message[ i ].email }</p>
         <p>Telefonnummer: ${ message[ i ].phone }</p>
         <p>Gatuadress: ${ message[ i ].address }</p> 
         <p>Ort: ${ message[ i ].city }</p>
         <p>Meddelande: ${ message[ i ].message }</p>
     
        <button class="action-button" data-action="delete" value=${ message[ i ].id }>Ta bort</button> 
   
      </form>
      </fieldset>
    `);
      $( "#messageList" ).append( section );
    }
  } )
}


export function messageButtonEventListeners () {
  $( '#messageList' ).on( 'click', '.action-button', function () {
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
    await deleteOne( "message", id );
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
    document.getElementById( "login-link" ).title = "Min sida";
    // $( "#login-link" ).attr( "title", "Min sida" );
    console.log( "true" )
    return true
  } else {
    console.log( "false" )
    return false
  }
}
