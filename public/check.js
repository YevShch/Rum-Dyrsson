import { getOne } from "./server-request.js"

export default function notANumber(number) {
  if (NaN(number)) {
    return true
  }
  return false
}

export default function stringEmpty(string) {
  if (string.trim() === ' ') {
    return true
  }
  return false
}

export default function validOption(option) {
  if (option === "") {
    return true
  }
  return false
}

export default function validPostNumber(postNumber) {
  if (postNumber.trim().legth === 5) {
    return true
  }
  return false
}

export default function validYear(year) {
  if (year.trim().legth === 4) {
    return true
  }
  return false
}

export default function validEmail(email) {
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