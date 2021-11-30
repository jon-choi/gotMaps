import './register.css';
import { Room } from '@material-ui/icons';
import { useState, useRef } from 'react';

export default function Register() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();


  return (
    <div className="registerContainer">
        <div className="logo">
          <Room />
          gotMaps?
        </div>
        <form>
          <input type="text" placeholder="username" />
          <input type="text" placeholder="email" />
          <input type="text" placeholder="password" />
          <button className="registerButton">Register</button>
          {success && (<span className="success">You can now login!</span>)}
          {error && (<span className="failure">Oops! Something went wrong!</span>)}

          
          
        </form>
    </div>
  )
}