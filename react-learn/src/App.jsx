import { useState } from 'react'
import Header from './components/Header'
import Todo from './components/Todo';
import WrapperComponent from './components/WrapperComponent';

let counter = 4;
function App() {
  const [title, setTitle] = useState("My name is Pratik");
  const [todos, setTodos] = useState(
    [
      {
        id: 1,
        title: "Learn DSA",
        description: "Currently working"
      },
      {
        id: 2,
        title: "Learn MERN",
        description: "Currently working"
      },
      {
        id: 3,
        title: "Start Youtube",
        description: "Currently not doing"
      },
    ]
  )

  const addTodo = () => {
    setTodos([...todos, {
      id: counter++,
      title: Math.random(),
      description: Math.random()
    }])
  }

  return (
    <>
      <button onClick={addTodo}>Add Todo</button>
      {todos.map((item) => {
        return (
          <>
          <WrapperComponent>
            <Todo key={item.id} title={item.title} description={item.description} />
          </WrapperComponent>
          <WrapperComponent>
            <h1>Helllooooo</h1>
          </WrapperComponent>
          </>
          
        )
      })}
    </>
  )
}

export default App
