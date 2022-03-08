import { useReducer } from 'react'

const initialState = {
  contador: 0,
}

type ActionType =
  | {
      type: 'incrementar'
    }
  | { type: 'decrementar' }
  | { type: 'custom'; payload: number }

const contadorReducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case 'incrementar':
      return {
        ...state,
        contador: state.contador + 1,
      }
    case 'decrementar':
      return {
        ...state,
        contador: state.contador - 1,
      }
    case 'custom':
      return {
        ...state,
        contador: state.contador + action.payload,
      }
    default:
      return state
  }
}

export const ContadorRed = () => {
  const [{ contador }, dispatch] = useReducer(contadorReducer, initialState)

  return (
    <>
      <div className="mt-5">
        <h3>Contador: useReducer</h3>
        <h4 className="my-3">Contador : {contador}</h4>

        <button
          className="m-2 btn btn-outline-info my-3"
          onClick={() => dispatch({ type: 'incrementar' })}
        >
          Incrementar + 1
        </button>
        <button
          className="m-2 btn btn-outline-info my-3"
          onClick={() => dispatch({ type: 'decrementar' })}
        >
          Decrementar - 1
        </button>
        <button
          className="m-2 btn btn-outline-info my-3"
          onClick={() => dispatch({ type: 'custom', payload: 20 })}
        >
          Custom
        </button>
      </div>
    </>
  )
}
