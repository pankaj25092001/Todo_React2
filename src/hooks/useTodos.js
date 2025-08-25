import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const useTodos = () => {
  const { state, dispatch } = useContext(TodoContext);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    dispatch({ type: 'ADD_TODO', payload: newTodo });
  };

  const removeTodo = (id) => {
    dispatch({ type: 'REMOVE_TODO', payload: id });
  };

  const toggleTodo = (id) => {
    dispatch({ type: 'TOGGLE_TODO', payload: id });
  };

  return {
    todos: state.todos,
    addTodo,
    removeTodo,
    toggleTodo,
  };
};

export default useTodos;
