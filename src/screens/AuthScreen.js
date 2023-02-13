import React, { useState, use } from 'react';
import { signup, login } from './data/authapi';

const Authentication = () => {
  const [formData, setFormData] = useState({
    companyName:'',
    email: '',
    password: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await signup(formData);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await login(formData);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input
          type="name"
          placeholder="companyname"
          value={formData.companyname}
          onChange={(event) =>
            setFormData({ ...formData, companyname: event.target.value })
          }
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(event) =>
            setFormData({ ...formData, email: event.target.value })
          }
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(event) =>
            setFormData({ ...formData, password: event.target.value })
          }
        />
        <button type="submit" >Signup</button>
      </form>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(event) =>
            setFormData({ ...formData, email: event.target.value })
          }
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(event) =>
            setFormData({ ...formData, password: event.target.value })
          }
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Authentication;
