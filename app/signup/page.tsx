"use client";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import React, { useState } from "react";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, provider, database } from "@/firebase";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

const page = () => {
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleSignUp = async () => {
    const res = await createUserWithEmailAndPassword(email, password);
    if (res) {
      alert("OK Login done");
    } else {
      alert("login fail");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-8 ">
      <h2 className="text-3xl font-bold mb-2">Sign In and Get Started</h2>
      

      <div className="space-y-10">
        <Input
          label="Email"
          placeholder="Enter your email"
          type="email"
          onChange={(e) => setemail(e.target.value)}
        />
        <Input
          label="Password"
          placeholder="Enter your Password"
          type="password"
          onChange={(e) => setpassword(e.target.value)}
        />
        <Button onPress={handleSignUp}>Sign Up</Button>
      </div>
    </div>
  );
};

export default page;
