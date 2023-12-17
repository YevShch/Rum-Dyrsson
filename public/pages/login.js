import { getOne, update } from "../server-request.js"

export default async function login () {
  if ( await checkLogIn() ) {
    console.log( 'här!' )
    return $( `
    <section id="loginHead">
      <h1>Logga in</h1>
    </section>

      <section id="login">
        <form id="loginForm">

          <label for="username">Användarnamn: </label>
          <input type="text" id="username" required><br><br>

            <label for="password">Lösenord: </label>
            <input type="password" id="password" required><br><br>

              <button id="logInBtn" type="submit" value="LogIn">Logga in</button>
              </form>
          </section>
          `)
  } else {
    window.location.href = "#admin";
  }
}

export function addLoginsEventlistner () {
  $( "#loginForm" ).on( "submit", function ( event ) {
    event.preventDefault()
    const username = $( '#username' ).val();
    const password = $( '#password' ).val();
    vailidLogin( username, password )
  }
  );
}

async function vailidLogin ( username, password ) {
  const user = await getOne( "admin", 1 )
  if ( user.username == username && user.password == password ) {
    console.log( "Korrekt inmatning!" )
    let logedIn = 
    await update( "admin", 1, "logIn", 1 )
    window.location.href = "#admin";

  } else {
    alert( "Felaktigt användarnamn eller lösenord!" )
  }
}

async function checkLogIn () {
  const user = await getOne( "admin", 1 )
  console.log( user.logIn )
  if ( user.logIn === 0 ) {
    console.log( true )
    return true
  } else {
    console.log( false )
    return false
  }
}
