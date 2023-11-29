export default function logIn() {
  return $(`
      
  <section id="login">
      <form id="loginForm">
    
      <h2>Logga in<h3>
      <label for="username" id="username">Användarnamn </label>
      <input type="text" id="username" required><br><br>

      <label for="password" id="password">Lösenord</label>
      <input type="password" id="password" required><br>

      <input type="submit" value="Logga in" id="logInBtn">
      </form>
  </section>`)
}