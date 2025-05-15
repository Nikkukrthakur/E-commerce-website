import React from 'react'
import Frontend from "@/components/frontend"
import Featuredproduct from '@/components/Featuredproduct'

function page() {
  return (
    <div>
      <Frontend />
      <Featuredproduct/>
      

    </div>
  )
}

export default page

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
