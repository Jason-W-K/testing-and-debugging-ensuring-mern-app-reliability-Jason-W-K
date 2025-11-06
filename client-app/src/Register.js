import React, { useState } from 'react';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registered, setRegistered] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    if (email && password) {
      setRegistered(true);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <input
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br />
        <input
          name="password"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br />
        <button type="submit">Register</button>
      </form>

      {registered && <p>Account created!</p>}
    </div>
  );
}

export default Register;