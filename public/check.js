import { getOne } from "./server-request.js"

export default function notANumber(number) {
  if (isNaN(number)) {
    return true
  }
  return false
}

export default function invalidOption(option) {
  if (option === "") {
    return true
  }
  return false
}

export default function invalidPostNumber(postNumber) {
  if (postNumber.trim().legth != 5) {
    return true
  }
  return false
}

export default function invalidYear(year) {
  if (year.trim().legth != 4) {
    return true
  }
  return false
}

export default function invalidEmail(email) {
  if (email.includes("@")) {
    return true
  }
  return false
}


//log in
export default function validLogin(username, password) {
  const user = getOne(admin, 1)

  if (user.username === username && user.password === password) {
    return true
  }
  return false
}