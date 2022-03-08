import { useForm } from '../hooks/useForm'

interface FormData {
  email: string
  nombre: string
}

export const Formulario = () => {
  //   const [formulario, setFormulario] = useState({
  //     email: '',
  //     nombre: '',
  //   })

  //   const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
  //     const { value, name } = target

  //     setFormulario({
  //       ...formulario,
  //       [name]: value,
  //     })
  //   }

  const { email, nombre, handleChange, formulario } = useForm<FormData>({
    //por useForm ...formulario
    email: '',
    nombre: '',
  })

  //   const { email, nombre } = formulario

  return (
    <div className="my-3">
      <h3>Formulario: Custom Hooks</h3>
      <form autoComplete="off">
        <div className="mb3">
          <label htmlFor="email" className="form-label">
            Email:{' '}
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={handleChange}
            value={email}
          />
        </div>

        <div className="mb3">
          <label htmlFor="email" className="form-label">
            Nombre:
          </label>
          <input
            type="text"
            name="nombre"
            className="form-control"
            onChange={handleChange}
            value={nombre}
          />
        </div>

        <pre className="my-4">{JSON.stringify(formulario)}</pre>
      </form>
    </div>
  )
}
