import { ref } from "vue"
import { v4 as uuidv4 } from "uuid"

export interface Todo {
  id: string
  name: string
  isComplete: boolean
  deadline: Date
}

const todos = ref<Todo[]>([])

const useTodo = () => {
  const addTodo = (todoName: string) => {
    const newDeadline = new Date()
    newDeadline.setMonth(newDeadline.getMonth() + 1)

    todos.value.push({
      id: uuidv4(),
      name: todoName,
      isComplete: false,
      deadline: newDeadline
    })
  }

  const removeTodo = (id: string) => {
    todos.value = todos.value.filter((todo) => todo.id !== id)
  }

  const toggleTodo = (id: string) => {
    const current = todos.value.find((todo) => todo.id === id)
    if (!current) return
    current.isComplete = !current?.isComplete
  }

  return { todos, addTodo, removeTodo, toggleTodo }
}

export default useTodo
