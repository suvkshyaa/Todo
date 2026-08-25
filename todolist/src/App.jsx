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
  <div>

    <input
      type = "text"
      value = {inputText}
      onChange = {(e) => setInputText(e.target.value)}
      placeholder = "Add a new task"
    />
    
    <button onClick = {handleAddTodo}>Add</button>
    
    <ul>
        {todos.map(todo => (
          <li key = {todo.id}>
            {todo.name} - {todo.completed ? 'completed' : 'not completed'}
            <button onClick = {() => handleDeleteTodo(todo.id)}>Delete</button>
            <button onClick = {() => handleToggleComplete(todo.id)}>Toggle</button>
          </li>
        ))}
      </ul>
    </div>
  );

}
export default App;