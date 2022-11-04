import React from 'react'
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const List = ({todosList,removeTodo}) => {
  const deleteTodo = (id) =>{
    removeTodo(id)
  }

  const todo = todosList.map(todo =>{
    return(
      <div key={todo.id} >
        <CheckBoxIcon color='primary' onClick={()=>{deleteTodo(todo.id)}} >完了</CheckBoxIcon>
        <span>{todo.content}</span>
      </div>
    )
  })

  


  return (
    <div>
      <h1>List</h1>
      <div>
        {todo}
      </div>
    </div>
  )
}

export default List