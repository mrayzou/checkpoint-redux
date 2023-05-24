import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addtodo } from '../../JS/Actions/actions'
import {Form, Button} from 'react-bootstrap'


export const AddTodo = () => {
  const [text, setText] = useState("")
  const dispatch = useDispatch()


  const handleAdd = (e) => {
    e.preventDefault()
    if (text) {
      dispatch(addtodo({id: Math.random(), text, isDone:false }))
      setText("")
    }
    else {
      alert ('Can not add an empty task')
    }
  }

  return (
    <div className='addtodo'>
      <Form onSubmit={handleAdd}>
        <Form.Control placeholder='Add new task' onChange={(e)=> setText(e.target.value)} value={text}/>
        <Button onClick={handleAdd}>Add</Button>
      </Form>
    </div>
  )
}

export default AddTodo;