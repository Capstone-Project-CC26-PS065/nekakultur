import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login({ onLogin }) {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const API = "http://localhost:5000/api";

  const handleLogin = async () => {
    if (!name || !password) {
      alert("Isi semua field!");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(`${API}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, password }),
      });

      const data = await res.json();

      if (res.ok && data.token) {
        // ✅ simpan token
        localStorage.setItem("token", data.token);

        // ✅ update state di App.jsx
        onLogin();

        // ✅ redirect ke dashboard
        navigate("/");

      } else {
        alert(data.message || "Login gagal ❌");
      }
    } catch (err) {
      console.error(err);
      alert("Server error ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>NekaKultur Login 🔐</h1>

      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Nama"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "10px", margin: "10px", width: "200px" }}
        />

        <br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: "10px", margin: "10px", width: "200px" }}
        />

        <br />

        <button
          onClick={handleLogin}
          disabled={loading}
          style={{
            padding: "10px 20px",
            background: "#E8640C",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          {loading ? "Loading..." : "Login"}
        </button>
      </div>

      <p style={{ marginTop: "10px" }}>
        Belum punya akun?{" "}
        <Link to="/login/daftar">Daftar</Link>
      </p>
    </div>
  );
}

export default Login;
