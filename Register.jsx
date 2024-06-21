import React, { useState } from 'react';
import { register } from '../api';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isTeacher, setIsTeacher] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(name, email, password, isTeacher);
      alert('Registration successful');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <br/>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <br/>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <br/>
      <label>
        Teacher
        <input
          type="checkbox"
          checked={isTeacher}
          onChange={(e) => setIsTeacher(e.target.checked)}
        />
      </label>
      <br/>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;


