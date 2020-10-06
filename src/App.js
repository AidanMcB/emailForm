import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Email Form</h1>
      <form name="contact" method="post" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <label className="label">Name</label><input required className="input" type="text" placeholder="First Last" name="name"/><br/>
        <label className="label">Email</label><input required className="input" type="email" placeholder="ex@example.com" name="email"/><br/>
        <label className="label">Message</label><textarea required className='input' id='message-box' placeholder='Enter Message' name="message"/><br/>
        <button className="red" type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
