"use client";
import React, { useEffect, useState } from "react";
import Frontend from "@/components/frontend";
import Featuredproduct from "@/components/Featuredproduct";
import p1 from "@/public/spoon.png";
import basket from "@/public/basket.png";
import bag from "@/public/bag.png";
import Lamp from "@/public/lamp.png";
import shirt from "@/public/shirt1.jpg";
import shirt1 from "@/public/shirt2.jpg";
import Pot from "@/public/pot.png";
import Elephant from "@/public/elephant.jpeg";
import Pot1 from "@/public/pot1.png";
import Link from "next/link";
import { auth } from "@/firebase";
import {  onAuthStateChanged, signOut, User } from "firebase/auth";
import { useRouter } from "next/navigation";
import { Button } from "@heroui/button";

function page() {
  const [isLoggedin, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error signing out:", error);
  }
};

  useEffect(() => {
    // const authh = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/login");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      {/* <Button>Log Out</Button> */}
      <Frontend />
      <Featuredproduct
        //  as={Link}
        //          href="/"
        discrip="Rs-850 – Neem Wooden Serving/Cooking Spatulas & Ladles Set of 5
              Natural Finish"
        picurl={p1}
        title=" Wooden Srving"
        picurl1={Elephant}
        title1="Wooden Ambari Elephant"
        discrip1="Rs-1,500 –Immerse yourself in the world of exquisite craftsmanship with the Wooden Ambari Elephant "
        title2="Pot"
        picurl2={Pot1}
        discrip2=" Rs-2,499 – Mittify Handmade Terracotta Clay Water Pot 8L with Lid & Metal Tap"
      />
      <Featuredproduct
        discrip="Rs-1,995 – Wicker Storage Basket Set of 3
              "
        picurl={basket}
        title=" wooden basket"
        discrip1="Rs-1000 –cotton shirt"
        picurl1={shirt1}
        title1="Shirt"
        discrip2="Rs-1,285 –Wicker Planter Set of 3 "
        title2="Handmade planters"
        picurl2={Pot}
      />
      <Featuredproduct
        discrip="Rs-705 – Eco Friendly Jute Lunch Bag Beige And Red 15 x 10 Inch
              "
        picurl={bag}
        title=" Jute Bag"
        discrip1="Rs-3000 –Embellished Lamp with Dhokra Brass Tiles & Red ShadeL"
        picurl1={Lamp}
        title1="Lamp"
        discrip2="Rs-1000 –Pure cotton "
        title2="Shirt"
        picurl2={shirt}
      />
    </div>
  );
}

export default page;

// "use client";
// import { useRouter } from "next/navigation";
// import React, { useEffect, useState } from "react";
// // import LoginP from

// const page = () => {
//   const [LoggedIn, setfirst] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     if (!LoggedIn) {
//       sendToLoginPage();
//     }
//   });

//   const sendToLoginPage = () => {
//     router.push("/login"); // navigate to /signup page
//   };
//   return (
//     <div>
//       {LoggedIn ? "Yes the user is Logged in" : "No the user is not logged in"}
//     </div>
//   );
// };

// export default page;
