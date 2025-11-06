import React from 'react';

export default function BugCard({ title, status }) {
  return (
    <div data-testid="bug-card" className="bug-card">
      <h3>{title}</h3>
      <p>Status: {status}</p>
    </div>
  );
}