import React from 'react'
import Item from './Item';

const List = ({todosList,removeTodo,updateTodo}) => {
  const deleteTodo = (id) =>{
    removeTodo(id)
  }

  return (
    <div>
      <h1>List</h1>
      <div>
      {todosList.map(todo =>{
        return(
          <Item todo={todo} deleteTodo={deleteTodo} key={todo.id} updateTodo={updateTodo} />
        )
      })}
      </div>
    </div>
  )
}

export default List