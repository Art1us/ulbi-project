import React, { useState } from "react"
import classes from "./Counter.module.scss"

export function Counter() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount(prev => prev + 1)
  }

  return (
    <div className={classes.btn}>
      <p>{count}</p>
      <button onClick={increment}>increment</button>
    </div>
  )
}
