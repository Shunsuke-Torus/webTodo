import List from './List'
import Form from './Form'
import { TodoProvider } from '../contexts/TodoContext'
import Heder from './Header'

const Todo = () => {
  return (
    <div>
      <Heder/>
      <TodoProvider>
        <List/>
        <Form/>
      </TodoProvider>
    </div>    

  )
}


export default Todo