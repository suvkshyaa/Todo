import { useState } from 'react';
import TodoForm from './TodoForm.jsx'
import TodoItem from './TodoItem.jsx'

function App() {

  const [todos, setTodos] = useState([
    { id: 1, name: 'Task 1', completed: true },
    { id: 2, name: 'Task 2', completed: false },
    { id: 3, name: 'Task 3', completed: false }
  ]);

  const handleAddTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      name: text,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="app-container">
      <h1 className="app-title">My Tasks</h1>

      <TodoForm onAddTodo={handleAddTodo} />

      <ul className="task-list">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={handleToggleComplete}
            onDelete={handleDeleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;