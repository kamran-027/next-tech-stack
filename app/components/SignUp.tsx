"use client";

import axios from "axios";
import React, { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleSubmit = () => {
    console.log("NAME::", name);
    console.log("EMAIl::", email);
    axios.post("http://localhost:3000/api/user", {
      name: name,
      email: email,
    });
  };

  return (
    <div className="flex flex-col gap-y-8 border border-black p-10 bg-slate-100 rounded-md">
      <div className="text-center text-xl text-gray-600">
        SignUp with details
      </div>

      <input
        placeholder="Enter Name..."
        className="border border-gray-500 rounded-md p-2"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Enter Email..."
        className="border border-gray-500 rounded-md p-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <div className="flex items-center justify-center w-full ">
        <button
          onClick={handleSubmit}
          className="bg-slate-600  w-1/3 rounded-md p-2 text-white hover:bg-slate-400"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default SignUp;
