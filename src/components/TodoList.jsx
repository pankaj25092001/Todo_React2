import useTodos from '../hooks/useTodos';

const TodoList = () => {
  const { todos, toggleTodo, removeTodo } = useTodos();

  if (todos.length === 0) return <p>No todos yet.</p>;

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <span
            onClick={() => toggleTodo(todo.id)}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              cursor: 'pointer',
            }}
          >
            {todo.text}
          </span>
          <button onClick={() => removeTodo(todo.id)}>❌</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
