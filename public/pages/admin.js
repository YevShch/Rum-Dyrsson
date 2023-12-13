export default function admin () {
  return `
   <div id="admin">
   <h1>Admin sida</h1>
  <div>
  
  <section id="#buyList">
<button onclick="openBuyList()">Visa alla bostäder till salu</button>
</section>
<br>

<section id="#sellMessage">
<button onclick="openSellMessage()">Visa alla säljförfrågningar</button>
</section>
<br>

<section id="intrestsList">
<button onclick="openIntrestsList()">Visa alla meddelande</button>
</section>
<br>


<script>

//  $( 'a[href="#login"]' ).hide();

function openBuyList () {
  window.location.href = "#buyList";
};

function openSellMessage () {
  window.location.href = "#sellList";
};

function openIntrestsList () {
  window.location.href = "#messageList";
};


</script>
  `
}




