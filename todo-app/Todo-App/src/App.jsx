import AppName from "./components/AppName"
import AppTodo from "./components/AppTodo"
import "./App.css"
import TodoItems from "./components/TodoItems"

const App = () => {
  const todoItems = [{
    name: "Buy Milk",
    dueDate: "26/10/2025"
  },
  {
    name: "Go to College",
    dueDate: "26/10/2025"
  },
  {
    name: "Attend Lectures",
    dueDate: "26/10/2025"
  }]

  return <center className="todo-container">

    <AppName />
    <AppTodo />
    <TodoItems todoItems={todoItems} />



  </center>
}

export default App
