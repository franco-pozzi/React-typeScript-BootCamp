import { useState } from 'react'

import { Timer } from './Timer'

export const TimerPadre = () => {
  const [milisegundos, setMilisegundos] = useState(1000)

  return (
    <>
      <div className="mt-5">
        <h4>TimerPadre: useEffect</h4>
        <span>Milisegundos {milisegundos}</span>
        <br />

        <button
          className="mt-2 mx-2 btn btn-outline-success"
          onClick={() => setMilisegundos(1000)}
        >
          1000
        </button>
        <button
          className="mt-2 mx-2 btn btn-outline-success"
          onClick={() => setMilisegundos(2000)}
        >
          2000
        </button>
        <Timer milisegundos={milisegundos} />
      </div>
    </>
  )
}
