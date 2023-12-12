import { getOne } from "../server-request.js"

export default function login() {
  return $(`
    <section id="loginHead">
      <h1>Här kan du logas in på din konto</h1>
    </section>

      <section id="login">
        <form id="loginForm">

          <label for="username">Användarnamn</label>
          <input type="text" id="username" required>

            <label for="password">Lösenord</label>
            <input type="password" id="password" required>

              <button id="logInBtn" type="submit" value="Logga in">Log in</button>
              </form>
          </section>
          `)
}

export function addLoginsEventlistner() {
  $("#loginForm").on("submit", function (event) {
    event.preventDefault()
    const username = $('#username').val();
    const password = $('#password').val();
    someFunction(username, password)
  }
  );
}

async function someFunction(username, password) {
  const user = await getOne("admin", 1);
  console.log(user)
  if (user.username == username && user.password == password) {
    console.log("Rät inlogningen!")
    window.location.href = "#admin";
  } else {
    alert("det är fel på användarnamnet eller lösenordet")
  }
}