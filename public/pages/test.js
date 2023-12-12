import { getAll, addOne } from "../server-request.js"
let sortedArray = []

export default function buy() {
  return $(`
  <br>
  <br>
  <br>
  <br>
<section>
  <label>sortera:</label>
  <select id="sortBy" onchange="updateBySort()" required>
  <option value="">--Välj gärna en option--</option>
  <option value="price">Pris</option>
  <option value="area">Area</option>
  <option value="year">Byggnads år</option>
  <option value="lägenhet">Visa bara lägenhet</option>
  <option value="vila">Visa bara vila</option>
  <option value="radhus">Visa bara radhus</option>
  <option value="tomt">Visa bara tomt</option>
</section>
          `)
}

function updateBySort() {
  sortedArray = []
  let data = getAllBuyData()
  let sort = $('#sortBy').val()
  switch (sort) {
    case 'price':
      console.log("sort price")
      sortedArray = data.sort((a, b) => a.price - b.price)
      break
    case 'area':
      console.log("sort area")
      sortedArray = data.sort((a, b) => a.area - b.area)
      break
    case 'year':
      console.log("sort year")
      sortedArray = data.sort((a, b) => a.year - b.year)
      break
    case 'lägenhet':
      console.log("filter lägenhet")
      filterBy(data, "lägenhet")
      break
    case 'villa':
      console.log("filter villa")
      filterBy(data, "villa")
      break
    case 'radhus':
      console.log("filter radhus")
      filterBy(data, "radhus")
      break
    case 'tomt':
      console.log("filter tomt")
      filterBy(data, "tomt")
      break
  }
}

function filterBy(data, item) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].type === item) {
      sortedArray.push(data[i])
    }
  }
}

async function getAllBuyData() {
  const data = await getAll("buy");
  console.log(data)
  return data
}

//addOne
$("").click(function () {
  addOne("intrest", intrestMessage)
})