import './register.css';
import { Room } from '@material-ui/icons';

export default function Register() {
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
        </form>
    </div>
  )
}