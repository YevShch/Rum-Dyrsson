export default function logIn() {
  return $(`<section id="login">
    <form id="loginForm">

      <label for="username">Användarnamn</label>
      <input type="text" id="username" required>

      <label for="password">Lösenord</label>
      <input type="password" id="password" required>

      <input type="submit" value="Logga in">
    </form>
  </section>`)
}