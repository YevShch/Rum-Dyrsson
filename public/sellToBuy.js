import { getOne, addOne, deleteOne } from "./server-request.js"

//move
$("").click(function () {
  const data = getOne("sell", sellID)
  addOne("buy", data)
  deleteOne("sell", sellID)
})

//delete
$("").click(function () {
  deleteOne("sell", sellID)
})
