import { ADD_TODO, EDIT_TODO, DELETE_TODO, DONE_TODO } from "../Constants/actions-types";

export const addtodo = newTodo => {
    return {
        type: ADD_TODO,
        payload: newTodo
    }
}

export const edittodo = (id, newTodo) => {
        return {
            type: EDIT_TODO,
            payload: {id, newTodo}
        }
}

export const deltodo = id => {
            return {
                type: DELETE_TODO,
                payload: id
            }
}

export const donetodo = id => {
    return {
        type: DONE_TODO,
        payload: id
    }
}


