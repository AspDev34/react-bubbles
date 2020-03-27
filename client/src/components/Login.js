import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const history = useHistory();

  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  const handleChange = (event) => {
    setUser({...user, [event.target.name]: event.target.value })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`http://localhost:5000/api/login`, user)
         .then(res => {
           window.localStorage.setItem('token', res.data.payload)
           history.push('/protected')
         })
         .catch(err => console.log('A submission error occurred', err))
  };

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>

      <form onSubmit={handleSubmit}>
        <input name='username' onChange={handleChange} value={user.username} placeholder='please enter your username' type='text'/>
        <input name='password' onChange={handleChange} value={user.password} placeholder='please enter your password' type='password'/>
        <button onClick={handleSubmit}>Login</button>
      </form>

    </>
  );
};

export default Login;
