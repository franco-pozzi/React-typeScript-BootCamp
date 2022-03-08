import { useState } from 'react'

export const Counter = () => {
  const [counter, setCounter] = useState(0)

  const incrementar = (number: number = 1): any => setCounter(counter + number)

  return (
    <div className="mt-5">
      <h1>Counter: useState</h1>
      <span>Valor: {counter}</span>
      <br />
      <button
        className="mt-2 mx-2 btn btn-outline-primary mt-2"
        onClick={() => incrementar()}
      >
        +1
      </button>

      <button
        className="mt-2 mx-2 btn btn-outline-primary mt-2"
        onClick={() => incrementar(2)}
      >
        +2
      </button>

      <button
        className="mt-2 mx-2 btn btn-outline-danger mt-2"
        onClick={() => setCounter(0)}
      >
        Reset
      </button>
    </div>
  )
}
