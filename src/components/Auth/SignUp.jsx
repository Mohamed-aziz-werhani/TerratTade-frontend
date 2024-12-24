import React, { useState } from 'react';
import './inStyles.css'; // Fichier CSS pour le style
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const [phone,setPhone]=useState('')
const [name,setname]=useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique d'inscription ici
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <div className="sign-container">
    <div className="sign-box">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
      <div className="input-group">
          <label htmlFor="name">name</label>
          <input
            type="name"
            id="name"
            value={email}
            onChange={(e) => setname(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          
        </div>
        <div className="input-group">
          <label htmlFor="Phone">Phone</label>
          <input
            type="Phone"
            id="Phone"
            value={email}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="sign-btn">Sign Up</button>
        <Link to='/signIn' className='lien_auth'><u>Sign In</u></Link>
      </form>
    </div>
  </div>
  );
}

export default SignUp;