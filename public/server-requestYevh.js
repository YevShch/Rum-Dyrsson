export async function getAllUsers () {
  const res = await fetch( '/data' )
  const data = await res.json()
  return data
}

export async function addBostad () {
  let response = await fetch( '/data', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify( {
      "id": "1",
      "type": "vila",
      "address": "Blåbärsvägen 1",
      "city": "Malmö",
      "price": "1000000",
      "rooms": "5",
      "area": "120",
      "balcony": "nej",
      "floor": "2",
      "elevator": "finns ej",
      "year": "2000",
      "storehouse": "finns",
      "parking": "parkeringplats",
      "garden": "finns",
      "name": "Lars Larsson",
      "email": "test123@gmail.com",
      "phone": "0123456789"

    } )
  } )
  response = await response.json()
  console.log( response );
}

export async function getOneUser ( userId ) {
  const res = await fetch( '/data/' + userId )
  const data = await res.json()
  return data;
}

export async function updateUser ( user ) {
  let response = await fetch( '/data/' + user.id, {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify( user )
  } )

  response = await response.json()
  console.log( response );
}
