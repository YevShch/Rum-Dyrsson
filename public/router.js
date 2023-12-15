import sell, { addSellsEventlistner } from "./pages/sell.js"
import buy from "./pages/buy.js"
import realters from "./pages/realters.js"
import login, { addLoginsEventlistner } from "./pages/login.js"
import admin, { addLogoutEventlistner } from "./pages/admin.js"
import buyList, { getAllBuyData, buyButtonEventListeners } from "./pages/buyList.js"
import sellList, { getAllSellData, sellButtonEventListeners } from "./pages/sellList.js"
import intrestList, { getAllIntrestData, intrestButtonEventListeners } from "./pages/intrestList.js"

async function router() {
  switch (location.hash) {
    case "#sell":
      $('main').html(await sell())
      addSellsEventlistner()
      break
    case "#buy":
      $('main').html(await buy())
      break
    case "#realters":
      $('main').html(await realters())
      break
    case "#login":
      $('main').html(await login())
      addLoginsEventlistner()
      break
    case "#admin":
      $('main').html(await admin())
      addLogoutEventlistner()
      break
    case "#buyList":
      $('main').html(await buyList())
      getAllBuyData()
      buyButtonEventListeners()
      break
    case "#sellList":
      $('main').html(await sellList())
      getAllSellData()
      sellButtonEventListeners()
      break
    case "#intrestList":
      $('main').html(await intrestList())
      getAllIntrestData()
      intrestButtonEventListeners()
      break
    default:
      $('main').html(`<section id="mainText"><h1 id="default">Välkommen till bostadsmäklarfirman Dhyr & Rumson</h1><h2>Hemsidan där du kan hitta ditt drömhus!<br><h2>
      <h3 id="defaultText">
        Att köpa bostad är ett stort beslut. Mycket ska stämma, både känslomässigt och praktiskt. Och resan kan vara lång för att hitta rätt. Oavsett vad du söker kan vi hjälpa dig hela vägen!<br><br>
        Vi kan även hjälpa dig med försäljning av egen bostad, vi ser till att hjälpa dig på ett enkelt, snabbt och smidigt sätt!<br><br>
        Vid frågor så kontaktar du mäklaren Trevor Clarkson under rubriken "mäklare".
      </h3><section>`)
  }
}

window.onhashchange = router
window.onload = router
