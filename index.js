function fetchToys( name, url ) {
    return fetch( 'http://localhost:3000/toys', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify( {
          name,
          url
        } )
      } )
      .then( function ( response ) {
        return response.json()
      } )
      .then( function ( object ) {
        let newDiv  = document.createElement("div")
        newDiv.className = "card"
        document.getElementsByClassName('card').appendChild(newDiv);
      } )
      .catch( function ( error ) {
        document.body.innerHTML = error.message
      } )
  }