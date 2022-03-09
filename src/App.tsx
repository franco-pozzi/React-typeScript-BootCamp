import { Counter } from './components/Counter'
import { TimerPadre } from './components/TimerPadre'

import { Usuario } from './components/Usuario'

import { ContadorRed } from './components/ContadorRed'
import { Formulario } from './components/Formulario'
import { TodoList } from './components/TodoList'

import { TodoProvider } from './context/TodoProvider'

function App() {
  return (
    <>
      <h1>React + TypeScript</h1>
      <Counter />
      <hr />
      <Usuario />
      <hr />
      <TimerPadre />
      <hr />
      <ContadorRed />
      <hr />
      <Formulario />

      <hr />

      <h1 className="my-5">Todo APP</h1>
      <TodoProvider>
        <TodoList />
      </TodoProvider>
    </>
  )
}

export default App
