// src/components/CompletedTodos.jsx
import useTodos from '../hooks/useTodos';

const CompletedTodos = () => {
  const { todos, toggleTodo, removeTodo } = useTodos();
  const completed = todos.filter((todo) => todo.completed);

  if (completed.length === 0) return <p>No completed todos.</p>;

  return (
    <section>
      <h2>Completed</h2>
      <ul>
        {completed.map(todo => (
          <li key={todo.id}>
            <span style={{ textDecoration: 'line-through' }} onClick={() => toggleTodo(todo.id)}>
              {todo.text}
            </span>
            <button onClick={() => removeTodo(todo.id)}>❌</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CompletedTodos;
