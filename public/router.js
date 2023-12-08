import sell from "./sell.js"
import {addSellsEventlistner} from "./sell.js"
import buy from "./buy.js"
import realters from "./realters.js"
import login from "./login.js"


function router () {
  switch ( location.hash ) {
    case "#sell":
      $( 'main' ).html( sell() )
      addSellsEventlistner()
      break
    case "#buy":
      $( 'main' ).html( buy() )
      break
    case "#realters":
      $( 'main' ).html( realters() )
      break
    case "#login":
      $( 'main' ).html( login() )
      break
    default:
      $( 'main' ).html( `<h2>Main page!</h2>` )
  }
}

window.onhashchange = router
window.onload = router
