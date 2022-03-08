import { Counter } from './components/Counter'
import { TimerPadre } from './components/TimerPadre'

import { Usuario } from './components/Usuario'

import { ContadorRed } from './components/ContadorRed'
import { Formulario } from './components/Formulario'

function App() {
  return (
    <>
      <h1>React + TypeScript</h1>
      <Counter />
      <Usuario />
      <TimerPadre />
      <ContadorRed />
      <Formulario />
    </>
  )
}

export default App
