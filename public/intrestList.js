export default function intrestsList() {
  return `
   <div id="intrestsList">
   <h1>intrests List</h1>
  <div>  
  `
}

//getAll
async function getAllBuyData() {
  const data = await getAll("intrest");
  console.log(data)
  return data
}

//delete
$("").click(function () {
  deleteOne("intrest", interestID)
})