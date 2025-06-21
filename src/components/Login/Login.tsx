import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/router";
import { login, register } from "../../pages/api/auth";

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Login: React.FC = () => {
  const [isLoginMode, setIsLoginMode] = useState<boolean>(true);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleMode = () => {
    setIsLoginMode((prev) => !prev);
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (!isLoginMode && formData.password !== formData.confirmPassword) {
        alert("Passwords don't match");
        return;
      }

      if (isLoginMode) {
        const response = await login(formData.email, formData.password);
        localStorage.setItem("user", JSON.stringify(response.data));
        alert("Login successful!");
        router.push("/Home");
      } else {
        await register(formData.name, formData.email, formData.password);
        alert("Signup successful! Please log in.");
        setIsLoginMode(true);
      }
    } catch (error: any) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-200 px-4 py-10 ">
      <div className="bg-blue-300 text-black shadow-md w-full max-w-md max-sm:rounded-3xl  sm:rounded-3xl px-6 py-8 sm:px-10">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
          {isLoginMode ? "Login to MoodTracker" : "Create your account"}
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {!isLoginMode && (
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="input border-2  bg-black text-white rounded-2xl w-full px-4 py-2"
            />
          )}

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input border-2  bg-black text-white rounded-2xl w-full px-4 py-2"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="input border-2  bg-black text-white rounded-2xl w-full px-4 py-2"
          />

          {!isLoginMode && (
            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="input border-2  bg-black text-white rounded-2xl w-full px-4 py-2"
            />
          )}

          <button
            type="submit"
            className="btn btn-primary mt-4 rounded-2xl py-2 text-white text-lg"
          >
            {isLoginMode ? "Login" : "Signup"}
          </button>
        </form>

        <p className="mt-4 text-center text-sm sm:text-base">
          {isLoginMode ? "Don't have an account?" : "Already have an account?"}{" "}
          <button onClick={toggleMode} className="text-blue-700 underline">
            {isLoginMode ? "Sign up" : "Log in"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
