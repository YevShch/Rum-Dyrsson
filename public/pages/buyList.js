import { getAll, getOne, addOne, deleteOne } from "./server-request.js"

export default function openBuyList() {
  const data = getAllBuyData()
  return `
   <div id="buyList">
   <h1>buyList</h1>
  <div>
  <br>
  

  `
}

//getAll
async function getAllBuyData() {
  const data = await getAll("buy");
  console.log(data)
  return data
}

//delete
$("").click(function () {
  deleteOne("buy", buyID)
})
