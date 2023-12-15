export async function getAll(section) {
  const res = await fetch(`/${section}`)
  const data = await res.json()
  return data
}

export async function addOne(section, newData) {
  try {
    const response = await fetch(`/${section}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newData)
    });

    if (!response.ok) {
      throw new Error(`Failed to add data to ${section}. Status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);

    //    return result; // or return whatever data you want to use in the calling function
  } catch (error) {
    console.error(`Error in addOne(${section}):`, error);
    throw error; // Re-throw the error to propagate it
  }
}

export async function getOne(section, id) {
  const res = await fetch(`/${section}/${id}`)
  const data = await res.json()
  console.log(data)
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
  let response = await fetch(`/${section}/${id}`, {
    method: 'DELETE'
  })

  response = await response.json()
  console.log(response);
}
