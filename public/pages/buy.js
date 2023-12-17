import { getAll, getOne, addOne } from "../server-request.js";
import NewIntrest from "../class/newIntrest.js";

let lastFilteredResidences = null;

function renderResidenceDetails(residence) {
  return `
  <div id="backToRes">
    <button id="filterBTN" onclick="backToAllResidences()">Tillbaka till Alla Bostäder</button>
     <section class="residenceContainer">
     <fieldset>
    <section class="residencePrewie">
    <div id="residencePhoto>
    <img src="${residence.photo}" alt="beskrivning_av_bilden"style="width:200px;height:200px;cursor:pointer;">
    </div>
    <div id="residenceDescriptions">
     <h3>${residence.address}</h3>
    <p>Typ: ${residence.type}</p>
    <p>Antal rum: ${residence.rooms}</p>
    <p>Storlek: ${residence.area} kvm</p>
    <p>Pris: ${residence.price} kr</p>
    <p>Byggår: ${residence.year}</p>
    <p>Balkong: ${residence.balcony}</p>
    <p>Förråd: ${residence.storehouse}</p>
    <p>Parkering: ${residence.parking}</p>
    <p>Innergård: ${residence.garden}</p>
    </div>
    </section>
    <div id="interestForm-${residence.id}" class="interest-form"">
        <input type="text" id="nameInterest-${residence.id}" placeholder="Ditt namn" >
         </br>
        <input type="tel" id="phoneInterest-${residence.id}" placeholder="Ditt telefonnummer" pattern="[0-9]+" title="Endast siffror är tillåtna" >
         </br>
        <input type="email" id="emailInterest-${residence.id}" placeholder="Din e-postadress" >
         </br>
        <button onclick="submitInterest(${residence.id})">Skicka</button>
    </div>
    </fieldset>
    </section>
    </div>
  `;
}

export default async function buy() {
  try {
    const residencesData = await getAll("buy");
    lastFilteredResidences = residencesData;

    const residencesList = residencesData.map(residence =>
      `
      <section onclick="showResidenceDetails(${residence.id})"alt="beskrivning_av_section"style="background background-color: #fff;cursor:pointer;">
      <fieldset>
      <img src="${residence.photo}" alt="beskrivning_av_bilden"style="width:200px;height:200px;cursor:pointer;">
       <div id="titleResidencePhoto">
      ${residence.address}
       </div>
        </br>
        <p>${residence.rooms} rum</p><p> ${residence.area} kvm</p>
        </br>
        <p> ${residence.price}</p>
        </section>
       </fieldset>
       `
    ).join('');

    return `
      <h2 class="searchTitle">Alla Bostäder:</h2>
      <div class="filterResidence">
        <label for="sortOrder">Sortera efter:</label>
        <select id="sortOrder">
          <option value="priceAsc">Pris (Lägst överst)</option>
          <option value="priceDesc">Pris (Högst överst)</option>
          <option value="sizeAsc">Storlek (Minst överst)</option>
          <option value="sizeDesc">Storlek (Störst överst)</option>
        </select>

        <label for="residenceType">Bostadstyp:</label>
        <select id="residenceType">
          <option value="all">Alla</option>
          <option value="villa">Villa</option>
          <option value="lägenhet">Lägenhet</option>
          <option value="radhus">Radhus</option>
        </select>

        <button onclick="filterResidences()">Filtrera</button>
      </div>

      <ul class="residencesList">
        ${residencesList}
      </ul>
    `;
  } catch (error) {
    console.error("Error fetching residences data:", error);
    return "Det uppstod ett fel vid hämtning av bostadsdata.";
  }
}

window.showResidenceDetails = async (residenceId) => {
  const residence = await getResidenceById(residenceId);
  document.getElementById("app").innerHTML = renderResidenceDetails(residence);
}

async function getResidenceById(id) {
  return await getOne("buy", id)
}

window.backToAllResidences = async () => {
  document.getElementById("app").innerHTML = await buy();
}

window.filterResidences = async function () {
  try {
    const sortOrder = document.getElementById('sortOrder').value;
    const residenceType = document.getElementById('residenceType').value;
    let residencesData = await getAll("buy");

    if (residenceType !== 'all') {
      residencesData = residencesData.filter(residence => residence.type === residenceType);
    }

    switch (sortOrder) {
      case 'priceAsc':
        residencesData.sort((a, b) => a.price - b.price);
        break;
      case 'priceDesc':
        residencesData.sort((a, b) => b.price - a.price);
        break;
      case 'sizeAsc':
        residencesData.sort((a, b) => a.area - b.area);
        break;
      case 'sizeDesc':
        residencesData.sort((a, b) => b.area - a.area);
        break;
    }

    lastFilteredResidences = residencesData;

    const residencesList = residencesData.map(residence =>
      `<li onclick="showResidenceDetails(${residence.id})">
        <img src="${residence.photo}" alt="Preview of ${residence.address}" class="residence-preview-image">
        ${residence.address}
        </br>
        ${residence.price}
        </br>
        ${residence.area}
      </li>`

    ).join('');

    const residencesContainer = document.querySelector('.residencesList');
    residencesContainer.innerHTML = residencesList;

  } catch (error) {
    console.error("Error fetching residences data:", error);
    return "Det uppstod ett fel vid hämtning av bostadsdata.";
  }
}

function validatePhone(phone) {
  const re = /^[0-9]+$/;
  return re.test(phone);
}

function validateEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return re.test(email);
}

window.submitInterest = async function (residenceId) {
  const nameInterest = document.getElementById(`nameInterest-${residenceId}`).value;
  const phoneInterest = document.getElementById(`phoneInterest-${residenceId}`).value;
  const emailInterest = document.getElementById(`emailInterest-${residenceId}`).value;

  if (!validatePhone(phoneInterest)) {
    alert("Ange ett giltigt telefonnummer (endast siffror).");
    return;
  }

  if (!validateEmail(emailInterest)) {
    alert("Ange en giltig e-postadress.");
    return;
  }

  const bostad = await getOne("buy", residenceId)

  let intrest = new NewIntrest(residenceId, bostad.address, nameInterest, phoneInterest, emailInterest)
  console.log(intrest);
  console.log(intrest.dataInfo());
  addOne("intrest", intrest.dataInfo());
  console.log('Intresseanmälan skickad');
  alert("Din intresseanmälan har skickats!");
};
