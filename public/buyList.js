import { getAll, getOne, addOne, deleteOne } from "./server-request.js"

export default function openBuyList() {
  const data = getAllBuyData()
  return `
   <div id="buyList">
   <h1>buyList</h1>
  <div>  
  `
}

//getAll
async function getAllBuyData() {
  const data = await getAll("buy");
  console.log(data)
  return data
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
