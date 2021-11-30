import './register.css';

export default function Register() {
  return (
    <div className="registerContainer">
        <div className="logo"></div>
        <form>
          <input type="text" placeholder="username" />
          <input type="text" placeholder="email" />
          <input type="text" placeholder="password" />
          <button>Register</button>
        </form>
    </div>
  )
}