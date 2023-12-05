import { validLogin } from "./check.js"


$("").click(function () {
  const username = $('#username').val();
  const password = $('#password').val();
  if (validLogin(username, password)) {
    return true
  }
  return ("det är fel på användarnamnet eller lösenordet")
})