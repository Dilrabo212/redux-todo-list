import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {addTodos} from '../redux/todoSlice'
import { useForm } from 'react-hook-form'
import './index.css'
const AddForm = () => {

    const dispatch = useDispatch()
    const [value,setValue]= useState('')
    const{ reset}=useForm()

    const onSubmit=(e)=>{
            e.preventDefault()
            dispatch(addTodos({
            title:value

        }

        ))
       setValue ('') 
    }

    
  return (
   <>
    <form onSubmit={onSubmit} className='form' >
      <input
      className='input'
      type='text'
      value={value}
      onChange={(e)=>setValue(e.target.value)}
      placeholder='Enter your todo...'
      required
      />
      <button type='submit' className='AddButton'>Add</button>
    </form>
   </>
  )

  }
export default AddForm
