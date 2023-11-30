import sell from "./sell.js"
import buy from "./buy.js"
import realters from "./realters.js"
import login from "./logIn.js"

function router() {
  switch (location.hash) {
    case "#sell":
      $('main').html(sell())
      break
    case "#buy":
      $('main').html(buy())
      break
    case "#realters":
      $('main').html(realters())
      break
    case "#login":
      $('main').html(login())
      break
    default:
      $('main').html(`<h1 id="default">Välkommen till bostadsmäklarfirman Dhyr & Rumson</h1><h2>Hemsidan där du kan hitta ditt drömhus!<h2>`)
  }
}

window.onhashchange = router
window.onload = router