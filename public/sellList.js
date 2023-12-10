export default function sellList() {
  return `
   <div id="sellMessage">
   <h1>Sell Message</h1>
  <div>  
  `
}

//getAll
async function getAllBuyData() {
  const data = await getAll("sell");
  console.log(data)
  return data
}

//getOne
$("").click(function () {
  const data = getOne("sell", sellID)
  addOne("buy", data)
  deleteOne("sell", sellID)
})

//delete
$("").click(function () {
  deleteOne("sell", sellID)
})