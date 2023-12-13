import { update } from "../server-request.js"

export default function admin() {
  return (`
   <div id="admin">
   <h1>Admin sida</h1>
  <div>
  
 <form id="#buyList">
<button onclick="openBuyList()">Buy lista</button>
</form>
<br>

<section id="#sellList">
<button onclick="openSellMessage()">Sell message</button>
</section>
<br>

<section id="intrestsList">
<button onclick="openIntrestsList()">Intresse message</button>
</section>
<br>

<section >
<button id="handleLogout">Logga ut</button>
</section>
<br>

<script>
function openBuyList () {
  window.location.href = "#buyList";
};

function openSellList () {
  window.location.href = "#sellList";
};

function openIntrestsList () {
  window.location.href = "#intrestsList";
};
</script>
  `
  )
}

export function addLogoutEventlistner() {
  $("#handleLogout").on("click", function () {
    console.log('knappen är tryckt')
    handleLogout()
    window.location.href = "#login";
  }
  );
}

export async function handleLogout() {
  console.log('update')
  await update("admin", 1, "logIn", 0)
}
