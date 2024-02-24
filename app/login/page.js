"use client";
import "tailwindcss/tailwind.css";
import React, { useState } from "react";
import Link from "next/link";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === "your_username" && password === "your_password") {
      console.log("Login successful");
    } else {
      setErrorMessage("Invalid username or password");
    }
  };

  return (
    <div className="flex justify-center items-center mt-20">
      <div className="w-full max-w-md border-2 p-5 rounded-md border-slate-200">
        <div className="mt-10 mb-8">
          <p className="font-mono font-extrabold text-[#f05537] text-3xl text-center">
            <Link href="/">GoTicket.</Link>
          </p>
        </div>
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit} className="max-w-md">
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-bold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="w-full border rounded-md py-2 px-3 text-gray-700"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full border rounded-md py-2 px-3 text-gray-700"
            />
          </div>
          {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded border-black"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
