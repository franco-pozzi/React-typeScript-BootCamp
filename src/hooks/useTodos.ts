import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

export const useTodos = () => {
  const { toggleTodo, todoState } = useContext(TodoContext)

  const { todos } = todoState

  return {
    todos: todos,
    pendingTodos: todos.filter((todo) => !todo.completed).length,
    toggleTodo,
  }
}
