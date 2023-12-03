import { validLogin } from "./check.js"


$("#saveHouse").click(function () {
  const username = $('#username').val();
  const password = $('#password').val();
  if (validLogin(username, password)) {
    return true
  }
  return ("det är fel på användarnamnet eller lösenordet")
})