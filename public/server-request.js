export async function getAll ( section ) {
  const res = await fetch( `http://localhost:3000/${ section }` )
  const data = await res.json()
  return data
}

// export async function addOne ( section, newData ) {
//   let response = await fetch( `/${ section }`, {
//     method: 'post',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify( newData )
//   } )

//   response = await response.json()
//   console.log( response );
// }

export async function addOne ( section, newData ) {
  let response = await fetch( `http://localhost:3000/${ section }`, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify( newData )
  } )

  response = await response.json()
  console.log( response );
}

export async function getOne ( section, id ) {
  const res = await fetch( `http://localhost:3000/${ section }` + id )
  const data = await res.json()
  return data;
}

export async function update ( section, updateData ) {
  let response = await fetch( `http://localhost:3000/${ section }` + updateData.id, {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify( updateData )
  } )

  response = await response.json()
  console.log( response );
}

export async function deleteOne ( section, id ) {
  let response = await fetch( `http://localhost:3000/${ section }` + id, {
    method: 'delete'
  } )

  response = await response.json()
  console.log( response );
}
