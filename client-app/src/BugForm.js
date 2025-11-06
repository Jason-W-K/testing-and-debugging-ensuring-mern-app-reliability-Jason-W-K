import React, { useState } from 'react';

function BugForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) {
      setError('All fields are required');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Bug Tracker</h1>
      <form onSubmit={handleSubmit}>
        {error && <p role="alert">{error}</p>}
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
        <button type="submit">Submit Bug</button>
      </form>

      {submitted && (
        <div>
          <h2>Submitted Bug</h2>
          <p>{title}</p>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
}

export default BugForm;