import React from 'react'
import { useSelector } from 'react-redux'
import store from '../redux/store'
import TodoCard from './TodoCard'

const ListTodo = () => {
    const state = useSelector((store)=>store.todoReducer)

    console.log(state.todos)
  return (
    <div>
        
        {state.isEmpty ?(
             <h5 className='text-center mt-5'>Nothing has been added yet</h5>)
        : (state.todos.map((todo,index) => <TodoCard key={index} todo= {todo}/>))
    }
    </div>
  )
}

export default ListTodo