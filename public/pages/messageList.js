import { getAll, deleteOne } from "../server-request.js";

export default function messageList () {
  return `
   <div id="messageList">
   <h1>Meddelande</h1>
  <div>
  
  <section id="#backBtn">
<button onclick="goToAdminPage()">Tillbaka till admin sida</button>
</section>

<form id="getAllMessage">
<button id="getAllMessage" type="submit">Visa alla meddelande</button>
</form>

<script>
function goToAdminPage () {
  console.log("Knappen fungerar!");
  window.location.href = "#admin";
};
</script>
  `
}

export function getAllMessages () {

  $( "#getAllMessage" ).on( "submit", function ( event ) {
    event.preventDefault()
    console.log( "Knappen fungerar!" );
    getAllMessageData()
  }
  );
}

async function getAllMessageData () {
  const message = await getAll( "intrest" );
  console.log( message )
  for ( let i = 0; i < message.length; i++ ) {

    const section = $( `
      <form id="showMessageList">
       <fieldset> 
        <h2>${ message[ i ].about }</h2>
        <p>${ message[ i ].id }</p>
        <p>Namn: ${ message[ i ].name }</p>
         <p>Efternamn: ${ message[ i ].lastName }</p>
         <p>Mejladress: ${ message[ i ].email }</p>
         <p>Telefonnummer: ${ message[ i ].phone }</p>
         <p>Gatuadress: ${ message[ i ].address }</p> 
         <p>Ort: ${ message[ i ].city }</p>
         <p>Meddelande: ${ message[ i ].message }</p>
        
        <form id="delete">
        <button type="submit" id="delete">Radera</button>
        </form>

         </fieldset>
      </form>
      <script>
      
      </script>
    `);
    $( "#delete" ).click( function () {
      deleteOne( "intrest", intrestID )
      console.log( data )
      console.log( "Knappen funkar!" );

    } )

    $( "#messageList" ).append( section );
  }
}

