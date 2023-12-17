import sell, { addSellsEventlistner } from "./pages/sell.js"
import buy from "./pages/buy.js"
import realters from "./pages/realters.js"
import login, { addLoginsEventlistner } from "./pages/login.js"
import admin, { addLogoutEventlistner } from "./pages/admin.js"
import buyList, { getAllBuyData, buyButtonEventListeners } from "./pages/buyList.js"
import sellList, { getAllSellData, sellButtonEventListeners } from "./pages/sellList.js"
import intrestList, { getAllIntrestData, intrestButtonEventListeners } from "./pages/intrestList.js"
import messageList, { getAllMessages, messageButtonEventListeners } from "./pages/messageList.js"
import contact, { addMessage } from "./pages/contact.js"
import home from "./pages/home.js"

async function router () {
  switch ( location.hash ) {
    case "#sell":
      $( 'main' ).html( await sell() )
      addSellsEventlistner()
      break
    case "#buy":
      $( 'main' ).html( await buy() )
      break
    case "#realters":
      $( 'main' ).html( await realters() )
      break
    case "#contact":
      $( 'main' ).html( await contact() )
      addMessage()
      break
    case "#login":
      $( 'main' ).html( await login() )
      addLoginsEventlistner()
      break
    case "#admin":
      $( "#login-link" ).attr( "title", "Min sida" );
      $( 'main' ).html( await admin() )
      addLogoutEventlistner()  
      break
    case "#buyList":
      $( 'main' ).html( await buyList() )
      getAllBuyData()
      buyButtonEventListeners()
      break
    case "#sellList":
      $( 'main' ).html( await sellList() )
      getAllSellData()
      sellButtonEventListeners()
      break
    case "#intrestList":
      $( 'main' ).html( await intrestList() )
      getAllIntrestData()
      intrestButtonEventListeners()
      break
    case "#messageList":
      $( 'main' ).html( await messageList() )
      getAllMessages()
      messageButtonEventListeners()
      
      
      break
    default:
      $( 'main' ).html( home())
  }
}

window.onhashchange = router
window.onload = router
