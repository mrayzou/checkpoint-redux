import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { edittodo } from "../../JS/Actions/actions";
import { useDispatch } from "react-redux";

export const EditTodo = ({ task }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const [newTask, setNewTask] = useState(task.text);

  const handleEdit = () => {
    dispatch(edittodo(task.id, newTask));
    handleClose();
  };

  return (
    <div className="todoedit">
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Form.Control
          placeholder="Edit new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditTodo;
