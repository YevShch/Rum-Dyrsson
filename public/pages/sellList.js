import { getAll, getOne, addOne, deleteOne } from "../server-request.js";

export default async function sellList() {
  if (await checkLogIn()) {
    window.location.href = "#login";
  }
  return $(`
   <div id="sellList">
   <h1>Säljförfrågningar:</h1>
  <div>
  `);
}

export async function getAllSellData() {
  $(document).ready(async function () {
    const bostad = await getAll("sell");
    console.log(bostad)
    for (let i = 0; i < bostad.length; i++) {
      const section = $(`
      <fieldset>
      <form id="showSellList">
       
        <h2>${bostad[i].id}</h2>
        <p>Foto: ${bostad[i].photo}</p>
         <p>Typ av bostad: ${bostad[i].type}</p>
         <p>Gatuadress: ${bostad[i].address}</p> 
         <p>Ort: ${bostad[i].city}</p>
         <p>Pris: ${bostad[i].price}</p>
         <p>Antal rum: ${bostad[i].rooms}</p>
         <p>Boarea: ${bostad[i].area}</p>
         <p>Balkong: ${bostad[i].balcony}</p>
         <p>Våningen: ${bostad[i].floor}</p>
         <p>Hiss: ${bostad[i].elevator}</p>
         <p>Byggnadsår: ${bostad[i].year}</p>
         <p>Förråd: ${bostad[i].storehouse}</p>
         <p>Parkeringplats: ${bostad[i].parking}</p>
         <p>Innegård: ${bostad[i].garden}</p>
         <p>Namn: ${bostad[i].firstName}</p>
         <p>Efternamn: ${bostad[i].lastName}</p>
         <p>Mejladress: ${bostad[i].email}</p>
         <p>Telefonnummer: ${bostad[i].phone}</p>

        <button class="action-button" data-action="publish" value=${bostad[i].id}>Publicera</button> 
     
        <button class="action-button" data-action="delete" value=${bostad[i].id}>Ta bort</button> 
   
      </form>
      </fieldset>
    `);

      $("#sellList").append(section);
    }
  })
}

export function sellButtonEventListeners() {
  $('#sellList').on('click', '.action-button', function () {
    const id = $(this).val();
    const action = $(this).data('action');
    console.log(`Button clicked with id: ${id} and action: ${action}`);

    // Execute the async logic based on the button click
    if (action === 'publish') {
      publish(id);
    } else if (action === 'delete') {
      remove(id);
    }
    console.log("end")
  });
}

// Async functions
export async function publish(id) {
  try {
    const data = await getOne("sell", id);
    console.log(data);
    await addOne("buy", data);
    await deleteOne("sell", id);
    console.log("Complete");
  } catch (error) {
    console.error('Error in publish:', error);
  }
  window.location.reload()
}

export async function remove(id) {
  try {
    await deleteOne("sell", id);
    console.log("Complete");
  } catch (error) {
    console.error('Error in remove:', error);
  }
  window.location.reload()
}

async function checkLogIn() {
  const user = await getOne("admin", 1)
  console.log(user.logIn)
  if (user.logIn === 0) {
    console.log("true")
    return true
  } else {
    console.log("false")
    return false
  }
}