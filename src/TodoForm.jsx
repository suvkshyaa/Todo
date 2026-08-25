import { useState } from 'react'

function TodoForm({ onAddTodo }) {
  const [inputText, setInputText] = useState('');

  const handleSubmit = () => {
    if (inputText.trim() !== '') {
      onAddTodo(inputText);
      setInputText('');
    }
  };

  return (
    <div className="input-row">
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Add a new task"
        className="task-input"
      />
      <button onClick={handleSubmit} className="add-button">Add</button>
    </div>
  );
}

export default TodoForm