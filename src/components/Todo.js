import { useState } from 'react'

import React from 'react'
import List from './List'
import Form from './Form'

const Todo = () => {
  const [todosList, setTodosList] = useState(
    [{
    id: 1,
    content: "予約"
    },{
    id : 2,
    content: "hoge"
    }]
  )

  const createTodo = (todos) =>{
    setTodosList([...todosList,todos])
  }

  const removeTodo = (id) =>{
    const newTodosList = todosList.filter(todo=>{
      return todo.id !== id
    })
    setTodosList(newTodosList)
  }
  
  

  return (
    <div>
      <h1>TodoApp</h1>
      <h1>Todo</h1>
      <List todosList={todosList} removeTodo={removeTodo} />
      <Form createTodo={createTodo} />
    </div>
  )
}

export default Todo