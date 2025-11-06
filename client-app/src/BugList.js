import React, { useState } from 'react';

function BugList() {
  const [bugs, setBugs] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;

    if (editingIndex !== null) {
      const updated = [...bugs];
      updated[editingIndex] = { title, description };
      setBugs(updated);
      setEditingIndex(null);
    } else {
      setBugs([...bugs, { title, description }]);
    }

    setTitle('');
    setDescription('');
  };

  const handleEdit = (index) => {
    setTitle(bugs[index].title);
    setDescription(bugs[index].description);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updated = bugs.filter((_, i) => i !== index);
    setBugs(updated);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Bug List</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        /><br />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        /><br />
        <button type="submit">{editingIndex !== null ? 'Update Bug' : 'Add Bug'}</button>
      </form>

      <ul>
        {bugs.map((bug, index) => (
          <li key={index}>
            <strong>{bug.title}</strong>: {bug.description}
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BugList;