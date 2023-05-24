import React, { useState } from 'react'
import {Button, ButtonGroup, Dropdown} from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { TodoModel } from '../TodoModel/TodoModel';


export const TodoFilter = () => {

  const [status, setStatus] = useState("ALL");
  const list = useSelector((state) => state.todoReducer.listTasks);

  return (
    <div >
    <Dropdown as={ButtonGroup}>
      <Button variant="success">Filter</Button>

      <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

      <Dropdown.Menu >
        <Dropdown.Item value="ALL" onClick={()=>setStatus("ALL")}>All</Dropdown.Item>
        <Dropdown.Item value="DONE" onClick={()=>setStatus("DONE")}>Done</Dropdown.Item>
        <Dropdown.Item value="UNDONE" onClick={()=>setStatus("UNDONE")}>Undone</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    { status === "DONE"?
      list.filter((el)=>el.isDone === true).map((el) => (
        <TodoModel task={el} key={el.id} />
      )) : status ==="UNDONE"?
      list.filter((el)=> el.isDone === false).map((el) => (
        <TodoModel task={el} key={el.id} />
      )):
      
      list.map((el) => (
        <TodoModel task={el} key={el.id} />
      ))}


    </div>
  )
}
