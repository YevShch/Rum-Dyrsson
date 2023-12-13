export default function sellList () {
  return $( `
   <div id="sellList">
   <h1>Säljförfrågningar:</h1>
  <div>
  

<section id="#backBtn">
<button onclick="goToAdminPage()">Tillbaka till admin sida</button>
</section>

<section id="#getAllSell">

<button id="getAllSell" type="submit">Visa alla säljföfrågningar</button>
</section>

export async function getAllResidences() {
  try {
    let response = await fetch('/residences');
    let responseJSON = await response.json();
    console.log("result = ", typeof responseJSON);
    return responseJSON;
  } catch (error) {
    console.error('Fel vid hämtning av bostäder:', error);
  }
};



  `)
}


export async function getAll ( section ) {
  const res = await fetch( `http://localhost:3000/${ "sell" }` )
  const data = await res.json()
  return data
}

// `export async function getAllResidences() {
//   try {
//     let response = await fetch('/residences');
//     let responseJSON = await response.json();
//     console.log("result = ", typeof responseJSON);
//     return responseJSON;
//   } catch (error) {
//     console.error('Fel vid hämtning av bostäder:', error);
//   }
// };



export default async function showBostadList () {
  try {
    const bostadData = await getAllResidences();
    

    const bostadList = bostadData.map( bostad =>
      `<li onclick="showBostadData(${ bostad.id })">
        <img src="${ bostad.imageURL[ 0 ] }" alt="Preview of ${ bostad.address }" class="bostad-preview-image">
        ${ bostad.address }
      </li>`
    ).join( '' );

    return `
      <h2 class="searchTitle">Alla Bostäder:</h2>
      

      <ul class="bostadList">
        ${ bostadList }
      </ul>
    `;
  } catch ( error ) {
    console.error( "Error fetching residences data:", error );
    return "Det uppstod ett fel vid hämtning av bostadsdata.";
  }
}
