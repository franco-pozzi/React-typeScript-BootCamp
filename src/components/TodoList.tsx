// import { useContext } from 'react'
// import { TodoContext } from '../context/TodoContext'
import { useTodos } from '../hooks/useTodos'

import { TodoItem } from './TodoItem'

export const TodoList = () => {
  // const { todoState } = useContext(TodoContext)

  // const { todos } = todoState

  const { todos, pendingTodos } = useTodos()

  return (
    <>
      <h3>Todo :{JSON.stringify(pendingTodos)} useContext</h3>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  )
}
