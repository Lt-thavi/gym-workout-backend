import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
  // BASIC FRONTEND VALIDATION
  if (!name || !email || !password) {
    alert("All fields are required");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address");
    return;
  }


  if (password.length < 6) {
    alert("Password must be at least 6 characters");
    return;
  }

  try {
    await api.post("/users/register", {
      name,
      email,
      password,
    });

    alert("Registration successful. Please login.");
    navigate("/login");
  } catch (err) {
    console.error("REGISTER ERROR:", err.response?.data || err.message);
    alert(err.response?.data?.message || "Registration failed");
  }
};


  return (
    <div>
      <h2>Register</h2>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />

      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;
