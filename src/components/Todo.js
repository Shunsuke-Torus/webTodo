import { useState} from 'react'
import React from 'react'
import List from './List'
import Form from './Form'

const Todo = () => {
  const [todosList, setTodosList] = useState([])

  const createTodo = (todos) =>{
    setTodosList([...todosList,todos])
  }

  const removeTodo = (id) =>{
    const newTodosList = todosList.filter(todo=>{
      return todo.id !== id
    })
    setTodosList(newTodosList)
  }
  
  const updateTodo = (todos) =>{
    const newTodo = todosList.map(_todo=>{
      return _todo.id === todos.id ? {..._todo,...todos} :{..._todo}
    })
    setTodosList(newTodo)
  }
  

  return (
    <div>
      <h1>TodoApp</h1>
      <h1>Todo</h1>
      {/* <TodoContext.Provider todosList={todosList}>
        <TodoDispatchContext>
          <List removeTodo={removeTodo} />
          <Form createTodo={createTodo} />
        </TodoDispatchContext>
      </TodoContext.Provider> */}
      <List removeTodo={removeTodo} todosList ={todosList} updateTodo={updateTodo} />
      <Form createTodo={createTodo} />
      
    </div>
  )
}

// const useTodo = () =>{
//   return useContext(TodoContext)
// }
// const useDispatchTodo = () =>{
//   return useContext(TodoDispatchContext)
// }
// export {useTodo,useDispatchTodo}

export default Todo