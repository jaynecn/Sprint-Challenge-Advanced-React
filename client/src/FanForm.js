import React from 'react';
import { useInput } from './useInput';
import './App.css';

const FanForm = () => {
  const [username, setUsername, handleUsername] = useInput("");
  const [password, setPassword, handlePassword] = useInput("");
  const [email, setEmail, handleEmail] = useInput("");

  const resetValues = e => {
    alert('thank you, we will be in touch soon');
    console.log('thank you, we will be in touch soon');
    e.preventDefault();
    setUsername("");
    setPassword("");
    setEmail("");
  };

  return (
    <form testid="form-input" className="fan-form" onSubmit={resetValues}>
      <input
        className="name-input"
        name="username"
        onChange={(info) => handleUsername(info.target.value)}
        placeholder="Name"
        type="text"
        value={username}
      />
      <input
        name="password"
        onChange={(info) => handlePassword(info.target.value)}
        placeholder="Password"
        type="password"
        value={password}
      />
      <input
        className="email-input"
        name="email"
        onChange={(info) => handleEmail(info.target.value)}
        placeholder="Email"
        type="text"
        value={email}
      />
      <button data-testid='signup' type="submit">Signup</button>
      {
        email.length > 0
        ? <p>Click the Signup button now!</p>
        : <p>Please enter your details</p>
      }
    </form>
  );
}

export default FanForm;