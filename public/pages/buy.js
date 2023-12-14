import { getAll } from "../server-request.js";

export default function buy () {
  return $( `
   <div id="showResidence">
   <section id="houseShow">
   <h1>Hitta ditt drömhus:</h1>
   
  
  <div>
  <form id="bostad">

    <section class="FiltreraBostad">
    <fieldset>
    <legend>Filtrera sökning:</legend>
    <div>
      <input type="radio" id="Hus" name="väljBostad" value="Hus" />
      <label for="Hus">Hus</label>

      <input type="radio" id="Lägenhet" name="väljBostad" value="Lägenhet" />
      <label for="Lägenhet">Lägenhet</label>

      <input type="radio" id="Villa" name="väljBostad" value="Villa" />
      <label for="Villa">Villa</label>
      <br><br>



<label for="price">Utgångspis:</label>
<input type="number" id="price" name="price" min="50000" max="999000000" value="50000" step="10000" title="Pris ska vara sifror"/>
<br>

<label for="rooms">Antal rums:</label>
<input id="rooms" type="number" name="rooms" min="1" max="20" value="1" required/>
<br>

<label for="area">Boarea, kvm:</label>
<input id="area" type="number" name="area"  min="20" max="500" value="20" step = "5" required/>
<br>


</fieldset>
</section>

</form>
<form id="getAllBuy">
<button id="getAllBuy" type="submit">Visa alla bostäder till salu</button>
</form>
</section>
  `);
}

export function getAllResidence () {

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
       <div id="houseSort">
       <form id="showBuyList">
       <fieldset>
         <form id="showDetail">
        <h2>${ bostad[ i ].address }</h2><h2>${ bostad[ i ].city }</h2>
       <img src="${ bostad[ i ].photo }" alt="beskrivning_av_bilden"style="width:200px;height:200px;cursor:pointer;">
         <p>Typ av bostad: ${ bostad[ i ].type }</p>
         <p>Pris: ${ bostad[ i ].price }</p>
         <p>Antal rum: ${ bostad[ i ].rooms }</p>
         <p>Boarea: ${ bostad[ i ].area }</p>
        
        <button type="submit" id="showDetail">Visa bostad</button>
        </form>
        </fieldset>
      </form>
      </div>
      <script>
      
      </script>
    `);
    $( "#showDetail" ).click( function () {
      // deleteOne( "buy", buyID )
      // console.log( data )
      console.log( "Knappen funkar!" );
    } )

    $( "#showResidence" ).append( section );
  }
}

$( document ).ready( function () {
  $( 'form#showBuyList' ).on( 'click', 'img', function () {
    $( this ).closest( 'form#showBuyList' ).find( 'img' ).not( this ).hide();
    $( this ).closest( 'form#showBuyList' ).find( 'p' ).not( $( this ).next() ).hide();
  } );
} );















