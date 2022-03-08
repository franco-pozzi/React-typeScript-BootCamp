import { useEffect, useRef, useState } from 'react'

type TimerArgs = {
  milisegundos: number
}

export const Timer = ({ milisegundos }: TimerArgs) => {
  const [segundos, setsegundos] = useState(0)

  const ref = useRef<NodeJS.Timer>()

  useEffect(() => {
    ref.current && clearInterval(ref.current)

    ref.current = setInterval(() => setsegundos((s) => s + 1), milisegundos)
  }, [])

  return (
    <div className="mt-5">
      <h4>
        Timer: <small> {segundos}</small>
      </h4>
    </div>
  )
}
