import sell from "./sell.js"
import { addSellsEventlistner } from "./sell.js"
import buy from "./buy.js"
import realters from "./realters.js"
import login from "./login.js"

function router() {
  switch (location.hash) {
    case "#sell":
      $('main').html(sell())
      addSellsEventlistner()
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
      $('main').html(`<h1 id="default">Välkommen till bostadsmäklarfirman Dhyr & Rumson</h1><h2>Hemsidan där du kan hitta ditt drömhus!<br><h2>
      <h3>
        Att köpa bostad är ett stort beslut. Mycket ska stämma, både känslomässigt och praktiskt. Och resan kan vara lång för att hitta rätt. Oavsett vad du söker kan vi hjälpa dig hela vägen!<br><br>
        Vi kan även hjälpa dig med försäljning av egen bostad, vi ser till att hjälpa dig på ett enkelt, snabbt och smidigt sätt!<br><br>
        Vid frågor så kontaktar du mäklaren Trevor Clarkson under rubriken "mäklare".
      </h3>`)
  }
}

window.onhashchange = router
window.onload = router