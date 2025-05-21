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
import { useRouter } from "next/navigation";

const page = () => {
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const router = useRouter();

  const handleSignUp = async () => {
    const res = await createUserWithEmailAndPassword(email, password);
    if (res) {
      router.push("/");
    } else {
      alert("login fail");
    }
  };

  return (
    <div>
      <div className="w-full max-w-md mx-auto p-8 mb-20 bg-green-400 border-4 py-20 rounded-2xl shadow-lg border-green-200  ">
        <h2 className="text-3xl font-bold mb-2 text-center">Sign In and Get Started</h2>

        <div className="space-y-8 flex flex-col items-center justify-center">
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
    </div>
  );
};

export default page;
