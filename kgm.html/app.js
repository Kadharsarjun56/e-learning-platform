import React, { useState } from 'react';

  const LoginPage = () => {
    const [loginData, setLoginData] = useState({ username: '', password: '' });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setLoginData({ ...loginData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add your login logic here
      console.log('Logging in with:', loginData);
    };
  
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={loginData.username}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  };
  
  const RegisterPage = () => {
    const [registerData, setRegisterData] = useState({ username: '', email: '', password: '' });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setRegisterData({ ...registerData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add your register logic here
      console.log('Registering with:', registerData);
    };
  
    return (
      <div>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={registerData.username}
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={registerData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={registerData.password}
            onChange={handleChange}
          />
          <button type="submit">Register</button>
        </form>
      </div>
    );
  };
  
  const App = () => {
    return (
      <div>
        <LoginPage />
        <RegisterPage />
      </div>
    );
  };
  
  export default App;

