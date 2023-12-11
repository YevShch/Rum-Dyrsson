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

<section id="logOut">
<button onclick="logOut">Logga ut</button>
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

function logOut () {
  window.location.href = "#login";
};

</script>
  `
  )
}
