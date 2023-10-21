import React from 'react'
import { useDispatch} from 'react-redux'
import {deleteTodos, toggleComplate} from '../redux/todoSlice'



const TodosItem = ({id,title,completed}) => {
   

    const dispatch = useDispatch()

 
    const handleComplateClick =()=>{
    dispatch(toggleComplate(
        {
            id:id,
            completed:!completed,
        }
    ))
}
const handleDeleteClick =()=>{
    dispatch(deleteTodos(
        {
            id:id,
        }
    ))
}

  return (
    <>
    {
        id &&
        <div className='todos' >
            <label className='label'>
              <input 
              className='checkbox'
              onChange={handleComplateClick} 
              type="checkbox" 
              checked={completed}/>
             <div className='text'>{ title }</div> 
             
                <button
              className='delete-btn'
               onClick={handleDeleteClick}
               >Delete</button>
             
            </label>
    </div>
    }
        </>
  )
}

export default TodosItem
