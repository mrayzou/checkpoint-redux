import {
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
  DONE_TODO,

} from "../Constants/actions-types";

const initialState = {
  listTasks: [
    { id: Math.random(), text: "Task1", isDone: false },
    { id: Math.random(), text: "Task2", isDone: true },
    { id: Math.random(), text: "Task3", isDone: false },
  ],
};

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return { ...state, listTasks: [...state.listTasks, payload] };

    case EDIT_TODO:
      return {
        ...state,
        listTasks: state.listTasks.map((el) =>
          el.id === payload.id ? { ...el, text: payload.newTodo } : el
        ),
      };

    case DELETE_TODO:
      return {
        ...state,
        listTasks: state.listTasks.filter((el) => el.id !== payload),
      };

    case DONE_TODO:
      return {
        ...state,
        listTasks: state.listTasks.map((el) =>
          el.id === payload ? { ...el, isDone: !el.isDone } : el
        ),
      };


    default:
      return state;
  }
};

export default todoReducer;
