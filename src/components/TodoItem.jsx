// import '../styles/TodoItem.module.css';
import { useState } from 'react';
import './TodoItem.css';

const TodoItem = ({ itemProp, handleChange, delTodo, setUpdate }) => {

  const [editing, setEditing] = useState(false);

  let viewMode = {};
  let editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  return (
    <li>
      <div><input
        type="checkbox"
        checked={itemProp.completed}
        onChange={(e) => console.log(e.target.value, itemProp.id)}
        style={viewMode}
      />
      <button onClick={handleEditing}>Edit</button>
      <button onClick={() => delTodo(itemProp.id)}>Delete</button>
      <span>{itemProp.title}</span>
      </div>
      <input
      type="text"
      value={itemProp.title}
      style={editMode}
      onChange={(e) => setUpdate(e.target.value, itemProp.id)}
      onKeyDown={handleUpdatedDone}
    />
    </li>
  );
};
export default TodoItem;