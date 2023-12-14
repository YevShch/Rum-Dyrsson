// export default async function renderResidencesList() {
//   try {
//     const residencesData = await getAllResidences();
//     lastFilteredResidences = residencesData;

//    const residencesList = residencesData.map(residence => 
//       `< li onclick = "showResidenceDetails(${residence.id})" >
//   <img src="${residence.imageURL[0]}" alt="Preview of ${residence.address}" class="residence-preview-image">
//     ${ residence.address }
//   </li>`
//     ).join('');

//     return `
    // < h2 class="searchTitle" > Alla Bostäder:</h2 >
    //   <div class="filterResidence">
    //     <label for="sortOrder">Sortera efter:</label>
    //     <select id="sortOrder">
    //       <option value="priceAsc">Pris (Lägst överst)</option>
    //       <option value="priceDesc">Pris (Högst överst)</option>
    //       <option value="sizeAsc">Storlek (Minst överst)</option>
    //       <option value="sizeDesc">Storlek (Störst överst)</option>
    //     </select>

    //     <label for="residenceType">Bostadstyp:</label>
    //     <select id="residenceType">
    //       <option value="all">Alla</option>
    //       <option value="Villa">Villa</option>
    //       <option value="Fritidshus">Fritidshus</option>
    //       <option value="Lägenhet">Lägenhet</option>
    //       <option value="Radhus">Radhus</option>
    //     </select>

    //     <button onclick="filterResidences()">Filtrera</button>
    //   </div>

    //   <ul class="residencesList">
    //     ${residencesList}
    //   </ul>
    
//   } catch (error) {
//     console.error("Error fetching residences data:", error);
//     return "Det uppstod ett fel vid hämtning av bostadsdata.";
//   }
// }




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
