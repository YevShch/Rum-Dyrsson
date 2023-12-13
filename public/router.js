import sell, { addSellsEventlistner } from "./pages/sell.js"
import buy from "./pages/buy.js"
import realters from "./pages/realters.js"
import login, { addLoginsEventlistner } from "./pages/login.js"
import admin from "./pages/admin.js"
import buyList, { getAllBuy } from "./pages/buyList.js"
import sellList, { getAllSell/*, changeStatusToBuy*/ } from "./pages/sellList.js"
import messageList, { getAllMessages } from "./pages/messageList.js"
import home from "./pages/home.js"
import contact, { addMessage } from "./pages/contact.js"

function router () {
  switch ( location.hash ) {
    case "#sell":
      $( 'main' ).html( sell() )
      $( 'a[href="#logOut"]' ).hide();
      addSellsEventlistner();
      break

    case "#buy":
      $( 'main' ).html( buy() )
      $( 'a[href="#logOut"]' ).hide();
      break

    case "#realters":
      $( 'main' ).html( realters() )
      $( 'a[href="#logOut"]' ).hide();
      break

    case "#contact":
      $( 'main' ).html( contact() )
      addMessage();
      $( 'a[href="#logOut"]' ).hide();
      break

    case "#login":
      $( 'main' ).html( login() )
      $( 'a[href="#logOut"]' ).hide();
      addLoginsEventlistner();
      break

    case "#admin":
      $( 'main' ).html( admin() )
      $( 'a[href="#login"]' ).hide();
      break

    case "#buyList":
      $( 'main' ).html( buyList() )
      getAllBuy();
      $( 'a[href="#login"]' ).hide();
      break

    case "#sellList":
      $( 'main' ).html( sellList() )
      getAllSell();
      // changeStatusToBuy();
      $( 'a[href="#login"]' ).hide();
      break

    case "#messageList":
      $( 'main' ).html( messageList() )
      getAllMessages();
      $( 'a[href="#login"]' ).hide();
      break

    default:
      $( 'main' ).html( home() )
      $( 'a[href="#logOut"]' ).hide();

  }
}
window.onhashchange = router
window.onload = router
