import React from "react";
import { useState } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("E-mail:" , email);
    console.log("Password:", password)

    setEmail("")
    setPassword("")
  };
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="border-2 border-emerald-600 p-20">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
          value={email}
          onChange={(e)=>{
           setEmail(e.target.value)
          }}
            required
            className="border-2 border-emerald-600 py-4 px-3 rounded-full text-xl outline-none bg-transparent placeholder:text-gray-400"
            type="email"
            placeholder="Enter email"
          />
          <input
          value={password}
          onChange={(e)=>{
         setPassword(e.target.value)
          }}
            required
            className="border-2 mt-4 border-emerald-600 py-4 px-3 rounded-full text-xl outline-none bg-transparent placeholder:text-gray-400"
            type="password"
            placeholder="Enter password"
          />
          <button className="mt-5 bg-emerald-600 py-4 px-3  text-xl rounded-xl outline-none  placeholder:text-white">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
