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
      $('main').html(`<h2>Välkommen till mäklarsajten 24/7</h2><p>Hemsidan där du kan hitta ditt drömhus!<p>`)
  }
}

window.onhashchange = router
window.onload = router