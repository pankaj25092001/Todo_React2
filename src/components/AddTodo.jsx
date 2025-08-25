import { useState } from 'react';
import useTodos from '../hooks/useTodos';


const AddTodo = () => {
  const [text, setText] = useState('');
  const { addTodo } = useTodos();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') return;
    addTodo(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo..."
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
