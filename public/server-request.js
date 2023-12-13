export async function getAll(section) {
  const res = await fetch(`/${section}`)
  const data = await res.json()
  return data
}

export async function addOne(section, newData) {
  let response = await fetch(`/${section}`, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newData)
  })

  response = await response.json()
  console.log(response);
}

export async function getOne(section, id) {
  const res = await fetch(`/${section}/${id}`)
  const data = await res.json()
  return data
}

export async function update(section, id, propertyName, newValue) {
  let response = await fetch(`/${section}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ [propertyName]: newValue })
  })
  response = await response.json()
  console.log(response);
}

export async function deleteOne(section, id) {
  let response = await fetch(`/${section}` + id, {
    method: 'delete'
  })

  response = await response.json()
  console.log(response);
}
