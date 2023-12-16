import { getAll, deleteOne, getOne } from "../server-request.js"

export default async function intrestList () {
  if ( await checkLogIn() ) {
    window.location.href = "#login";
  }

  return $( `
   <div id="intrestList">
   <h1>intresse medelande:</h1>
  <div>
  `);
}

export async function getAllIntrestData () {
  $( document ).ready( async function () {
    const intrest = await getAll( "intrest" );
    console.log( intrest )
    for ( let i = 0; i < intrest.length; i++ ) {
      const section = $( `
      <fieldset>
      <form id="showBuyList">
       
        <h2>${ intrest[ i ].id }</h2>
         <P>BostadID: ${ intrest[ i ].bostadID } 
          <P>Address: ${ intrest[ i ].address } 
         <p>Namn: ${ intrest[ i ].name }</p>
         <p>Mejladress: ${ intrest[ i ].email }</p>
         <p>Telefonnummer: ${ intrest[ i ].phone }</p>

        <button class="action-button" data-action="delete" value=${ intrest[ i ].id }>Ta bort</button> 
   
      </form>
      </fieldset>
    `);
      $( "#intrestList" ).append( section );
    }
  } )
}

export function intrestButtonEventListeners () {
  $( '#intrestList' ).on( 'click', '.action-button', function () {
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
    await deleteOne( "intrest", id );
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
