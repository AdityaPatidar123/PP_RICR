import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast as showToast } from "react-toastify";
import axios from "../config/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/user/login", { email, password });
      
      // Fetch user profile (token is included automatically from cookies)
      const response = await axios.get("/api/user/check");
      const profile = response.data;

      // Save user info in sessionStorage
      sessionStorage.setItem("user", JSON.stringify(profile));

      // Show success message
      showToast.success(data.message);
      
      // Navigate to home page
      navigate("/");
    } catch (error) {
      showToast.error(error.response?.data?.message || "Login Denied! Invalid Credentials.");
      
      console.error("Error Status:", error.response?.status);
      console.error("Error Response:", error.response?.data || error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account? {" "}
          <a href="/signup" className="text-blue-600 hover:text-blue-700 font-semibold">
            Go to Signup
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
