import { update, getOne } from "../server-request.js"

export default async function admin() {
  if (await checkLogIn()) {
    window.location.href = "#login";
  }

  return (`
    <div id="admin">
    <h1>Admin sida</h1>
    <div>

    <div id="adminLogIn">
    <form id="#buyList">
    <button id="adminBuy" onclick="openBuyList()">Köp lista</button>
    </form>
    <br>

    <section id="#sellList">
    <button id="adminSell" onclick="openSellList()">Sälj lista</button>
    </section>
    <br>

    <section id="#messageList">
    <button id="adminMessage" onclick="openMessageList()">Meddelande</button>
    </section>
    <br>

    <section id="intrestsList">
    <button id="adminIntrest" onclick="openIntrestList()">Intresse meddelande</button>
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

    function openMessageList () {
      window.location.href = "#messageList";
    };


    function openIntrestList () {
      window.location.href = "#intrestList";
    };
    </script>
  `)
}

export function addLogoutEventlistner() {
  console.log("log out")
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

async function checkLogIn() {
  const user = await getOne("admin", 1)
  console.log(user.logIn)
  if (user.logIn === 0) {
    console.log("true")
    return true
  } else {
    console.log("false")
    return false
  }
}
