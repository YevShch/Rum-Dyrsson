import { getOne, addOne, deleteOne } from "./server-request.js"

export default function buyList() {
  return `
   <div id="buyList">
   <h1>buyList</h1>
  <div>  
  `
}

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
