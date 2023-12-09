import sell from "./sell.js"
import {addSellsEventlistner} from "./sell.js"
import buy from "./buy.js"
import realters from "./realters.js"
import login, { addLoginsEventlistner } from "./login.js"
import admin from "./admin.js"
import buyList from "./buyList.js"
import sellMessage from "./sellMessage.js"
import intrestsList from "./intrestsList.js"


function router () {
  switch ( location.hash ) {
    case "#sell":
      $( 'main' ).html( sell() )
      addSellsEventlistner();
      break
    case "#buy":
      $( 'main' ).html( buy() )
      break
    case "#realters":
      $( 'main' ).html( realters() )
      break
    case "#login":
      $( 'main' ).html( login() )
      addLoginsEventlistner();
      break
    case "#admin":
      $( 'main' ).html( admin() )
      addBuyListEventlistner();
      addSellMessadgeEventListner();
      addIntresseEventListner();
      addLoggUtEventListner();
      break
    case "#buyList":
      $( 'main' ).html( buyList() )
      break
    case "#sellMessage":
      $( 'main' ).html( sellMessage() )
      break
    case "#intrestsList":
      $( 'main' ).html( intrestsList() )
      break
    default:
      $( 'main' ).html( `<h2>Main page!</h2>` )
  }
}
window.onhashchange = router
window.onload = router
