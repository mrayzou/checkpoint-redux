import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deltodo, donetodo } from "../../JS/Actions/actions";
import { EditTodo } from "../EDITTODO/EditTodo";

export const TodoModel = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <div className='todomodel'>
      <span>{task.text}</span>
      <EditTodo task={task}/>
      <Button
        
        onClick={() => dispatch(donetodo(task.id))}
      >
        {task.isDone ? "UNDONE" : "DONE"}
      </Button>

      

      <Button className="btn btn-danger" onClick={() => dispatch(deltodo(task.id))}>DELETE</Button>
    </div>
  );
};
