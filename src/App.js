import React, { useState } from 'react';
import './App.css';

function App() {
  const [submitted, setFormSubmitted] = useState(false);
  return (
    <div className="App App-header">
      <h3>Registration form</h3>
      {
        submitted ? 
        (
          <div id="success">Registration request submitted successfully</div>
        ) : 
        <form>
        <input name='firstName' id='firstName' placeholder='First name'/>
        <input name='lastName' id='lastName' placeholder='Last name'/>
        <input name='email' id='email' type ='email' placeholder='Email' />
        <input name='username' id='username' type='text' placeholder='User name'/>
        <input name='password' id='password' type='password' placeholder='Password'/>
        <button type="submit" id="submit" onClick={() => setFormSubmitted(true)}>Register</button>
      </form>
      }
    </div>
  );
}

export default App;
