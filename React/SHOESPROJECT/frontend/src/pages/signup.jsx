import React, { useState } from "react";
import axios from "../config/api";
import showToast from "../components/toast";

function Signup() {
  const [inputData, setInputData] = useState({
    fullName: "",
    email: "",
    password: "",
    gender: "",
    age: "",
    mobile: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    setErrors({});
    let tempErrors = {};
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
    const mobileRegex = /^[6-9]\d{9}$/;

    if (!nameRegex.test(inputData.fullName) || inputData.fullName.length < 3)
      tempErrors.fullName = "Full Name is required.";

    if (!emailRegex.test(inputData.email))
      tempErrors.email = "Invalid email format.";

    if (!passwordRegex.test(inputData.password))
      tempErrors.password =
        "Password must be at least 8 characters long and include A-Z, a-z, 0-9, and special characters.";

    if (!inputData.gender) tempErrors.gender = "Please select a gender.";

    if (!inputData.age || inputData.age < 18)
      tempErrors.age = "Age must be at least 18.";

    if (!mobileRegex.test(inputData.mobile))
      tempErrors.mobile = "Invalid mobile number.";

    if (!inputData.agree)
      tempErrors.agree = "You must agree to the Terms & Conditions.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setInputData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const formData = new FormData();
    for (const key in inputData) {
      formData.append(key, inputData[key]);
    }

    try {
      const response = await axios.post("/api/user/signup", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      showToast.success(response);
      console.log(response);
      
      
    } catch (error) {
      showToast.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit}>
        
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={inputData.fullName}
              onChange={handleChange}
              className="mt-2 p-3 w-full border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
          </div>

        
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={inputData.email}
              onChange={handleChange}
              className="mt-2 p-3 w-full border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              name="password"
              value={inputData.password}
              onChange={handleChange}
              className="mt-2 p-3 w-full border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Gender</label>
            <select
              name="gender"
              value={inputData.gender}
              onChange={handleChange}
              className="mt-2 p-3 w-full border rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
          </div>

        
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Age</label>
            <input
              type="number"
              name="age"
              value={inputData.age}
              onChange={handleChange}
              className="mt-2 p-3 w-full border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
          </div>

          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Mobile Number</label>
            <input
              type="text"
              name="mobile"
              value={inputData.mobile}
              onChange={handleChange}
              className="mt-2 p-3 w-full border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
          </div>

          
          <div className="mb-4 flex items-center">
            <input type="checkbox" name="agree" checked={inputData.agree} onChange={handleChange} className="mr-2" />
            <label className="text-sm text-gray-600">
              I accept the <a href="/terms" className="text-blue-600">Terms and Conditions</a>
            </label>
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
