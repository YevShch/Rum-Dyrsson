import { getAll, deleteOne } from "../server-request.js";

export default function buyList () {
  return $( `
   <div id="buyList">
   <h1>Säljförfrågningar:</h1>
  <div>
  
 <section id="backBtn">
<button onclick="goToAdminPage()">Tillbaka till admin sida</button>
</section>
  
<form id="getAllBuy">
<button id="getAllBuy" type="submit">Visa alla bostäder till salu</button>
</form>



<script>
  function goToAdminPage () {
    console.log( "Knappen fungerar!" );
  window.location.href = "#admin";
};
</script>

  `);
}

export function getAllBuy () {

  $( "#getAllBuy" ).on( "submit", function ( event ) {
    event.preventDefault()
    console.log( "Knappen fungerar!" );
    getAllBuyData()
  }
  );
}

async function getAllBuyData () {
  const bostad = await getAll( "buy" );
  console.log( bostad )
  for ( let i = 0; i < bostad.length; i++ ) {
    const section = $( `
      <form id="showBuyList">
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

        
        <form id="delete">
        <button type="submit" id="delete">Radera/markera som såld</button>
        </form>

         </fieldset>
      </form>
      <script>
      
      </script>
    `);
    $( "#delete" ).click( function () {
      deleteOne( "buy", buyID )
      console.log( data )
      console.log( "Knappen funkar!" );

    } )

    $( "#buyList" ).append( section );
  }
}



