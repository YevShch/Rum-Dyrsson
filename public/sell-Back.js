import { addOne } from "./server-request.js"
import NewBostad from "./newBostad.js";
import { invalidOption, notANumber, invalidPostNumber, invalidYear, invalidEmail } from "./check.js"
let errorMsg = []


// $( "#saveHouse" ).click( function () {
export default function addBostad() {
  console.log( "Vi kommit in!" );
  errorMsg = []
  const type = $( '#type' ).val();
  if ( invalidOption( type ) ) { errorMsg.push( "Typ av bostad måste väljas!" ) }
  const address = $( '#addres' ).val();
  const city = $( '#city' ).val();
  const post = $( '#post' ).val();
  if ( notANumber( post ) ) { errorMsg.push( "postnummer kan bara innehålla siffor" ) }
  if ( invalidPostNumber( post ) ) { errorMsg.push( "Postnummer måste vara 5 siffror" ) }
  const price = $( '#price' ).val();
  if ( notANumber( price ) ) { errorMsg.push( "Utgångspriset kan bara innehålla siffor" ) }
  const rooms = $( '#rooms' ).val();
  const area = $( '#area' ).val();
  const balcony = $( '#balcony' ).val();
  if ( invalidOption( balcony ) ) { errorMsg.push( "Antal balkong måste väljas!" ) }
  const floor = $( '#floor' ).val();
  const elevator = $( '#elevator' ).val();
  const year = $( '#year' ).val();
  if ( invalidYear( year ) ) { errorMsg.push( "Byggnadsår måste vara på 4 siffror!" ) }
  const storehouse = $( '#storehouse' ).val();
  if ( invalidOption( storehouse ) ) { errorMsg.push( "Förråd val måste väljas!" ) }
  const parking = $( '#parking' ).val();
  if ( invalidOption( parking ) ) { errorMsg.push( "Parkerings val måste väljas!" ) }
  const garden = $( '#garden' ).val();
  if ( invalidOption( garden ) ) { errorMsg.push( "Innegård val måste väljas!" ) }
  const description = $( '#description' ).val();
  const sellerName = $( '#name' ).val();
  const email = $( '#email' ).val();
  if ( invalidEmail( email ) ) { errorMsg.push( "Email måste innehålla ett @" ) }
  const phone = $( '#phone' ).val();
  if ( notANumber( phone ) ) { errorMsg.push( "Telefonnummer kan bara innehålla siffor" ) }

  if ( errorMsg.length != 0 ) {
    alert( errorMsg )
  } else {
    console.log( "new bostad are created!" );
    const bostad = new NewBostad( type, address, city, post, price, rooms, area, balcony, floor, elevator, year, storehouse, parking, garden, description, sellerName, email, phone )
    addOne( "sell", bostad.dataInfo() );
    alert( "sell förfrågningen skapad!" );
    // }
  }

};

