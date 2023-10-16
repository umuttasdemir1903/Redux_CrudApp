import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo,uptadeTodo } from '../redux/actions/todoAction';
import axios from 'axios';


const TodoCard = ({todo}) => {
    const dispatch= useDispatch();
    const [isProcess,setIsProcess] = useState({
        delete:false,

    })

    const [isEditMode,setIsEditMode] =useState(false)
    const handleDelete = ()=> {

        setIsProcess({...isProcess,delete:true})

        axios.delete(`/todos/${todo.id}`)
        .then(()=>  {
            dispatch(deleteTodo(todo.id));
            setIsProcess({...isProcess,delete:false})
        })
      

    }
    const handleEdit = () => {
        //yapıldı değerini tersine çevirir
        const updated = { ...todo,isDone:!todo.isDone}

        setIsProcess({...isProcess,edit:true})

        axios.put(`/todos/${todo.id}`,updated)
        .then(()=> {
            dispatch(uptadeTodo(updated));
            setIsProcess({...isProcess,edit:false})
        }) 
    }
    const handleSave = (e) => {
        e.preventDefault();
        const text = e.target[0].value;

        const updated = {...todo,text}

        axios.put(`/todos/${todo.id}`,updated)
        .then(()=> {
            dispatch(uptadeTodo(updated))
            setIsEditMode(false)
        })
    }
  return (
    <div className='border shadow-lg p-4 my-5 rounded'>
        <div className='d-flex justify-content-between'>
      {
        !isEditMode ?   <h3> {todo.text}</h3> :
        <form onSubmit={handleSave} className='d-flex gap-4 mb-4'>
           <input className='form-control' defaultValue={todo.text}/>   
           <button className='btn btn-primary btn-sm'>Save</button>     
        </form>
     

      }
        <p>{new Date(todo.date).toLocaleDateString()}</p>
        </div>
      
        <h6>{todo.isDone ? "Complete" : "Contunies"}</h6>
     
        <div className='mt-3 d-flex  gap-2'>

        <button onClick={()=> setIsEditMode(!isEditMode)} className='btn btn-warning '>
            {isProcess.update && 
             <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"> 
            </span> 
            }
          {!isEditMode ? 'Edit': 'Cancel'}
        </button>
        <button onClick={handleEdit} className='btn btn-success '>
            {isProcess.edit && 
             <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"> 
            </span> 
            }
            {todo.isDone ? "Back" : "Compete"}
        </button>
        <button onClick={handleDelete} className='btn btn-danger '>
             {isProcess.delete && 
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"> 
                </span> 
                 }
       
            Delete
            </button>
        </div>
       
    </div>
  )
}

export default TodoCard