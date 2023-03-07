import React, { useState } from 'react'

function Counter({ count, setCount, test }) {

    // const [ count, setCount ] = useState(0)

    function incCount() {
        // if setCount is doubled it will not count 2 up
        setCount(count + 1)
    }

    function decCount() {
        // doubled will count two up
        // prior re-render does not cause the number to reset back to inital state
        setCount(prevCount => prevCount - 1)
    }

  return (
    <div className="counter-container">
        <button onClick={decCount}>-</button>
        <span>{count}</span>
        <button onClick={incCount}>+</button>
    </div>
  )
}

export default Counter