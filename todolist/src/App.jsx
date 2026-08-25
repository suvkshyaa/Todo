import {useState} from 'react';

function App() {

  const [todos, setTodos] = useState([
    {id: 1, name: 'Task 1', completed: true},
    {id: 2, name: 'Task 2', completed: false},
    {id: 3, name: 'Task 3', completed: false}
  ]);

  const [inputText, setInputText] = useState('');
  const handleAddTodo = () => {
    if (inputText.trim() !== '') {
      const newTodo = {
        id:Date.now(),
        name:inputText,
        completed:false
      };
      setTodos([...todos, newTodo]);
      setInputText('');
    } 
  };  
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTodos(todos.map((todo) => 
    todo.id === id ? {...todo, completed: !todo.completed} : todo
    )); 
  };

  return (
  <div className="app-container">
    <h1 className="app-title">My Tasks</h1>

    <div className="input-row">
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Add a new task"
        className="task-input"
      />
      <button onClick={handleAddTodo} className="add-button">Add</button>
    </div>

    <ul className="task-list">
      {todos.map(todo => (
        <li key={todo.id} className="task-item">
          <span
            onClick={() => handleToggleComplete(todo.id)}
            className={todo.completed ? "task-text completed" : "task-text"}
          >
            {todo.name}
          </span>
          <button onClick={() => handleDeleteTodo(todo.id)} className="delete-button">Delete</button>
        </li>
      ))}
    </ul>
  </div>
);


}
export default App;