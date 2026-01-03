import { useState } from "react";
import api from "../api/axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await api.post("/users/login", {
        email,
        password,
      });

      const token = res.data.token;
      const decoded = jwtDecode(token);

      localStorage.setItem("token", token);
      localStorage.setItem("role", decoded.role);

      if (decoded.role === "admin") navigate("/admin");
      else if (decoded.role === "trainer") navigate("/trainer");
      else navigate("/member");
    } catch (err) {
      console.error("LOGIN ERROR:", err.response?.data || err.message);
      alert("Login failed");
    }
  };

  return (
    <div>
      <h2>Login</h2>

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

      <button onClick={handleLogin}>Login</button>

      <p>
        Don’t have an account?{" "}
        <span
          style={{ color: "blue", cursor: "pointer" }}
          onClick={() => navigate("/register")}
        >
          Register
        </span>
      </p>
    </div>
  );
}

export default Login;
