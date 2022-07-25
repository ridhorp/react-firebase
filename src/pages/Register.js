import { useState } from "react";
import { auth } from "../services/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!email || !password) return alert("email or password is empty");

    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      alert("register succesfully");
      setEmail("");
      setPassword("");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h4>Register</h4>
        <form onSubmit={handleRegister}>
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

export default Register;
