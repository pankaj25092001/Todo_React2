// src/components/PendingTodos.jsx
import useTodos from '../hooks/useTodos';

const PendingTodos = () => {
  const { todos, toggleTodo, removeTodo } = useTodos();
  const pending = todos.filter((todo) => !todo.completed);

  if (pending.length === 0) return <p>No pending todos.</p>;

  return (
    <section className='pending-todos'>
      <h2>Pending</h2>
      <ul>
        {pending.map(todo => (
          <li key={todo.id}>
            <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
            <button onClick={() => removeTodo(todo.id)}>❌</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PendingTodos;
