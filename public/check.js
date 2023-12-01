export default function notANumber(item) {
  if (NaN(item)) {
    return true
  }
  return false
}