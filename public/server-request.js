export async function getAll(section) {
  const res = await fetch(`http://localhost:3000/${section}`)
  const data = await res.json()
  return data
}

export async function addOne(section) {
  let response = await fetch(`http://localhost:3000/${section}`, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      "id": 4,
      "name": "Anders",
      "age": 47,
      "list": []
    })
  })

  response = await response.json()
  console.log(response);
}

export async function getOne(section, id) {
  const res = await fetch(`http://localhost:3000/${section}` + id)
  const data = await res.json()
  return data;
}

export async function update(section, updateData) {
  let response = await fetch(`http://localhost:3000/${section}` + updateData.id, {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updateData)
  })

  response = await response.json()
  console.log(response);
}

export async function deleteOne(section, id) {
  let response = await fetch(`http://localhost:3000/${section}` + id, {
    method: 'delete',
    headers: { 'Content-Type': 'application/json' }
  })

  response = await response.json()
  console.log(response);
}
