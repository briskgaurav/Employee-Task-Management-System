import React, { useState } from "react";

function Login({handleLogin}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email, password);
    handleLogin(email,password);
    setEmail("");
    setPassword("");
  }

  return (
    <div className="h-screen w-full bg-zinc-900">
      <div className="flex justify-center items-center  h-full">
        <form onSubmit={handleSubmit} className="flex w-[35%] p-20 bg-zinc-800/20  rounded-xl flex-col gap-4">
          <h1 className="text-center text-red-400 text-3xl font-bold">LOGIN</h1>
          <input required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="px-4 py-2 text-white  rounded-full placeholder:text-zinc-400 bg-transparent outline-none border"
            type="email"
            placeholder="Email"
          />
          <input required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="px-4 py-2 text-white  rounded-full placeholder:text-zinc-400 bg-transparent outline-none border"
            type="password"
            name="password"
            placeholder="Password"
          />
          <button className="px-5 py-2 bg-red-400 rounded-xl" >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
