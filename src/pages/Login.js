import { useState } from "react";
import { auth } from "../services/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      alert("login successfully");
      setEmail("");
      setPassword("");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h4>Login</h4>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input type="submit" value="Register" />
        </form>
      </header>
    </div>
  );
}

export default Login;
