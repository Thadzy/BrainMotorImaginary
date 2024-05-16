import React, { useContext, useState } from 'react';
import UserContext from './UserContext';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [user, setUser] = useContext(UserContext);

  if (!setUser) {
    throw new Error("setUser is undefined");
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRole(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        role,
      }),
    });

    if (response.ok) {
      const userData = await response.json();
      setUser(userData);
      console.log('Login successful');
    } else {
      console.log('Login failed');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Sign In</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} required className="form-control" />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} required className="form-control" />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="role">Role:</label>
          <select id="role" value={role} onChange={handleRoleChange} required className="form-control">
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary mt-3">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;