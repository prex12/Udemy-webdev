import React, { useEffect, useState } from 'react'

function Effects() {
  const [count, setCount] = useState(0)
  // the useEffect hook causes a side effect. it accepts a parameter function which gets called after eevery render of the components
// basically...
  useEffect(()=>{
    document.title = `you clicked ${count} times`
  })

  const increment=() =>{
    setCount(prevCount=>
      count + 1)
  }
  return (
    <div>
        <button onClick={increment}>clicked {count} times</button>
    </div>
  )
}

export default Effects