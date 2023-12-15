import { getAll } from "../server-request.js";

export default async function buy () {
  return $( `
   <div id="showResidence">
   <h2>Alla bostäder:</h2>
   
      <div class="filterResidence">
        <label for="sortBy">Sortera efter:</label>
        <select id="sortBy">
          <option value="minUp">Pris (Lägst överst)</option>
          <option value="maxUp">Pris (Högst överst)</option>
        </select>

        <label for="residenceType">Bostadstyp:</label>
        <select id="type">
          <option value="all">Alla</option>
          <option value="Villa">Villa</option>
          <option value="Radhus">Radhus</option>
          <option value="Lägenhet">Lägenhet</option>
          <option value="Tomt">Tomt</option>
        </select>

        <button onclick="filterResidences()">Filtrera</button>
        <script>
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
    console.log(sortedArray);
  } );
}
        </script>
      </div>
  <div>
  `);
}

// function filterResidences () {
//   $( document ).ready( async function () {
//     const bostad = await getAll( "buy" );
//     console.log( bostad )
//     let sort = $( '#sortBy' ).val()
//     console.log( "sort price" )
//     if ( sort === "minUp" ) {
//       sortedArray = bostad.sort( ( a, b ) => a.price - b.price )
//       console.log();
//     } else if ( sort === "maxUp" ) {
//       sortedArray = bostad.sort( ( a, b ) => b.price - a.price )
//     }
//     console.log(sortedArray);
//   } );
// }

// function updateBySort () {
//   sortedArray = []
//   let data = getAllBuyData()
//   let sort = $( '#sortBy' ).val()
//   console.log( "sort price" )
//   sortedArray = data.sort( ( a, b ) => a.price - b.price )
// } 

// function filterBy ( data, type ) {
//   for ( let i = 0; i < data.length; i++ ) {
//     if ( data[ i ].type === type ) {
//       sortedArray.push( data[ i ] )
//     }
//   }
// }



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

        <button class="action-button" data-action="delete" value=${bostad[ i ].id}>Hämta ID</button> 
        </form>
        </fieldset>
      </form>
      </div>
    `); 
      $( "#showResidence" ).append( section );
    }
  } )
}

export function addBuyEventListeners () {
  $( '#showResidence' ).on( 'click', '.action-button', function () {
    console.log("Knappen fungerar!");
    const id = $( this ).val();
    const action = $( this ).data( 'action' );
    console.log( `Button clicked with id: ${ id } and action: ${ action }` );

  } );
}









