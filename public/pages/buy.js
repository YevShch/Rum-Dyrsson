// import { getAll } from "./server-request";

export default function buy () {
  return `
   <div id="köpText">
   <h1>Här kan du köpa bostad</h1>
  <div>

<button type="submit" id="allHouses">Visa alla bostäder</button>
    
  `
}

export function showAllHouses () {
  $( "#allHouses" ).on( "submit", function ( event ) {
    alert("Knappen fungerar!")
    event.preventDefault()
    getAll( "buy" );
console.log(data);
  }
  );
}


