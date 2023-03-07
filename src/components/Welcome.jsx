import React from 'react'

function Welcome({ firstName, names, setNames  }) {
    console.log({
      iterable: firstName,
      initState: names,
      fxtoModify: setNames
    })

    function removeName() {
      // if iterable in names (aka: Jose, Tyler, Alex, etc) does not match firstName (order in which the names are looped over in app.jsx:20)
      // return the values to updatedNames variable
      const updatedNames = names.filter(i => i !== firstName)
      // send updatedNames to the setter function to update state
      setNames(updatedNames)
    }
  return (
    <div>
        <h1 onClick={removeName}>Welcome, {firstName}</h1>
    </div>
  )
}

export default Welcome