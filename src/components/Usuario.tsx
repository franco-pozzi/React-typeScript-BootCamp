import { useState } from 'react'

interface User {
  uid: string
  name: string
}

const tempUser: User = {
  uid: 'ABC123',
  name: 'Franco P',
}

export const Usuario = () => {
  const [user, setUser] = useState<User>()

  const login = () => {
    setUser(tempUser)
  }

  return (
    <div className="mt-5">
      <h3>Usuario: useState</h3>
      <br />
      <button className="btn btn-outline-primary" onClick={login}>
        Login
      </button>

      {!user ? (
        <pre className="my-3">No hay usuario</pre>
      ) : (
        <pre className="my-3"> {JSON.stringify(user)}</pre>
      )}
    </div>
  )
}
