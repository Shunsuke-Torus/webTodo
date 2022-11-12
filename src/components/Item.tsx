import { useState } from 'react';
import {HStack,IconButton,Input} from "@chakra-ui/react"
import {CheckIcon,AddIcon} from "@chakra-ui/icons"

import {useDispatchTodos} from '../contexts/TodoContext';
import type { Todo } from '../contexts/TodoContext';

//直接渡しては行けない
type Props ={
  todo:Todo
}

const Item:React.FC<Props> = (props) => {
  const dispatch = useDispatchTodos()  

  const [changeValue, setChangeValue] = useState(props.todo.content)

  const changeContent = (e:React.ChangeEvent<HTMLInputElement>) =>{
    setChangeValue(e.target.value)
  }

  const toggleEditMode = () =>{
    const newTodo = {...props.todo,flag: !props.todo.flag}
    dispatch(
      {
        type: "todo/update",
        todo: newTodo
      }
    )
  }

  const onClickEvent = (event: React.MouseEvent<HTMLElement, MouseEvent>):void => {
    event.preventDefault()
    confirmContent()
  };

  const onSubmitEvent = (event: React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault()
    confirmContent()
  }

  const confirmContent = () =>{
    const newTodo = {...props.todo,
      flag: !props.todo.flag,
      content: changeValue
    }
    dispatch(
      {
        type: "todo/update",
        todo: newTodo
      }
    )
  }

  const deleteTodo = (todo:Todo) =>{
    dispatch(
    {
      type: "todo/remove",
      todo: todo
    })
  }

return (
  <HStack spacing="6" py="1" key={props.todo.id}>
    <>
      <IconButton aria-label="delete Todo" icon={<CheckIcon/>} bg="blue.100" isRound onClick={()=>{deleteTodo(props.todo)}} />
        <form onSubmit={onSubmitEvent} >
          {props.todo.flag ? (
            <div>
              <Input width='auto' type="text" value={changeValue} onChange={(e)=>{changeContent(e)}} />
              <IconButton aria-label="add Todo" isRound bg="blue.200" icon={<AddIcon/>} onClick={onClickEvent} />
            </div>) 
            :(<span onClick={toggleEditMode} >{props.todo.content}</span>)}
        </form>
    </>
  </HStack>
)
}

export default Item