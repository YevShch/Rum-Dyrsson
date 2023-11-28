export default function logIn() {
  return $(`
      
  <section id="login">
      <form id="loginForm">
    
      <h3>Logga in<h3>
      <label for="username">Användarnamn</label>
      <input type="text" id="username" required><br>

      <label for="password">Lösenord</label>
      <input type="password" id="password" required><br>

      <input type="submit" value="Logga in" id="logInBtn">
      </form>
  </section>`)
}