export default function login () {
  return $( `
  <section id="login">
   <h1>Här kan du logas in på din konto</h1>
  <section id="login">
    <form id="loginForm">

      <label for="username">Användarnamn</label>
      <input type="text" id="username" required>

      <label for="password">Lösenord</label>
      <input type="password" id="password" required>

      <input type="submit" value="Logga in">
    </form>
  </section>
  </section>
  `)
}

