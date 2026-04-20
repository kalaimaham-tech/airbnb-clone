import { useState } from "react";
import api from "../api/axios";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/register", { name, email, password });
      setMessage(res.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || "Registration Failed!");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="bg-white p-6 rounded-lg shadow-md w-80" onSubmit={handleRegister}>
        <h2 className="text-2xl font-semibold mb-4 text-center">Register</h2>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-2 border rounded mb-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="w-full bg-red-500 text-white p-2 rounded">
          Register
        </button>

        <p className="text-center text-sm mt-2 text-gray-600">{message}</p>
      </form>
    </div>
  );
}

export default Register;
