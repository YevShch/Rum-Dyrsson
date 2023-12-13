import { getAll, addOne, deleteOne } from "../server-request.js";


export default function sellList () {
  return $( `
   <div id="sellList">
   <h1>Säljförfrågningar:</h1>
  <div>
 <section id="backBtn">
<button onclick="goToAdminPage()">Tillbaka till admin sida</button>
</section>

<form id="getAllSell">
<button id="getAllSell" type="submit">Visa alla säljföfrågningar</button>
</form>



<script>
  function goToAdminPage () {
    console.log( "Knappen fungerar!" );
  window.location.href = "#admin";
};
</script>

  `);

}

export function getAllSell () {

  $( "#getAllSell" ).on( "submit", function ( event ) {
    event.preventDefault()
    console.log( "Knappen fungerar!" );
    getAllSellData()
  }
  );
}

async function getAllSellData () {
  const bostad = await getAll( "sell" );
  console.log( bostad )
  for ( let i = 0; i < bostad.length; i++ ) {
    const section = $( `
      <form id="showSellList">
       <fieldset>
        <h2>${ bostad[ i ].id }</h2>
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
         <p>Namn: ${ bostad[ i ].name }</p>
         <p>Efternamn: ${ bostad[ i ].lastName }</p>
         <p>Mejladress: ${ bostad[ i ].email }</p>
         <p>Telefonnummer: ${ bostad[ i ].phone }</p>

        <form id="publish">
        <button type="submit" id="publish ">Publicera</button> 
        </form>
        

        <form id="delete">
        <button type="submit" id="delete()">Radera</button>
        </form>

         </fieldset>
      </form>
      <script>
      
      </script>
    `);
    $( "#publish" ).click( function () {

      const data = getOne( "sell", sellID );
      // console.log( "Knappen funkar!)
      console.log( data )
      console.log( "Knappen funkar!" );
      addOne( "buy", data )

      deleteOne( "sell", sellID )
    } )

    $( "#sellList" ).append( section );

  }
}


$( "#publish" ).click( function () {
  const data = getOne( "sell", sellID )
  addOne( "buy", data )
  deleteOne( "sell", sellID )
} )





