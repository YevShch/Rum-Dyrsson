export default function admin () {
  return `
   <div id="admin">
   <h1>Admin sida</h1>
  <div>
  
  <section id="#buyList">
<button onclick="openBuyList()">Buy lista</button>
</section>
<br>

<section id="#sellMessage">
<button onclick="openSellMessage()">Sell message</button>
</section>
<br>

<section id="intrestsList">
<button onclick="openIntrestsList()">Intresse message</button>
</section>
<br>



<section id="loggOut">
<button id="loggOut">Logga ut</button>
</section>
<br>

  `
}


export function openBuyList () {
  $( "#buyList" ).on( "submit", function ( event ) {
    event.preventDefault()
    window.location.href = "#sellMessage";
  }
  );
}
 
export function openSellMessage () {
  $( "#sellMessage" ).on( "submit", function ( event ) {
    event.preventDefault()
    window.location.href = "#sellMessage";
  }
  );
}

export function openIntrestsList () {
  $( "#intrestsList" ).on( "submit", function ( event ) {
    event.preventDefault()
    window.location.href = "#intrestsList";
  }
  );
}

export function LoggOut () {
  $( "#logOut" ).on( "submit", function ( event ) {
    event.preventDefault()
    window.location.href = "#loggOut";
  }
  );
}
