// "use client";

// import { useState } from "react";
// import { signIn } from "next-auth/react";


// export default function SignIn() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const result = await signIn("credentials", {
//       redirect: false,
//       phone: username,
//       password,
//     });

//     if (result?.error) {
//       setError("Invalid credentials");
//     } else {
//       window.location.href = "/";
//     }
//   };

//   return (
//     <div className="min-h-screen overflow-y-auto bg-gradient-to-b from-white to-[#135058] animated-gradient font-sans relative ">
//       <div className="absolute top-0 left-0 w-full h-full -z-10"/>

//       <div className="max-w-sm mx-auto mt-24 mb-10 bg-[rgba(57,89,116,0.85)] text-white px-6 py-10 shadow-[1px_1px_10px_black,6px_6px_0px_#344454,10px_10px_10px_black] pt-16 relative rounded">
//         <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#344455] p-5 rounded-full shadow-[0_0_9px_2px_#344454] text-center">
//           <i className="fa fa-sign-in text-2xl text-white" />
//         </div>

//         <div className="text-center text-md mb-5">
//           <strong>Welcome,</strong> please login
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Username"
//               required
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="w-full bg-[rgba(40,52,67,0.75)] border border-[#4a525f] text-white px-5 py-2 pl-6 pr-12 focus:outline-none focus:border-l-4 focus:border-[#ccd8da] border-l-4 border-[#93a5ab] text-sm"
//             />
//             <i className="fa fa-user absolute top-2.5 right-5 text-[#93a5ab] text-sm" />
//           </div>

//           <div className="relative">
//             <input
//               type="password"
//               placeholder="Password"
//               required
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full bg-[rgba(40,52,67,0.75)] border border-[#4a525f] text-white px-5 py-2 pl-6 pr-12 focus:outline-none focus:border-l-4 focus:border-[#ccd8da] border-l-4 border-[#93a5ab] text-sm"
//             />
//             <i className="fa fa-lock absolute top-2.5 right-5 text-[#93a5ab] text-sm" />
//           </div>

//           {error && <p className="text-red-400 text-sm text-center">{error}</p>}

//           <button
//             type="submit"
//             className="w-full border-2 border-[#93a5ab] text-white py-2 text-sm hover:border-white hover:shadow-inner hover:bg-[#7692A7] transition duration-700"
//           >
//             Login
//           </button>
//         </form>
//       </div>
      
//     </div>
//   );
// }




"use client";

import { useState, useEffect } from "react";
import { signIn } from "next-auth/react";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Lock scrolling on SignIn mount
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });

    if (result?.error) {
      setError("Invalid credentials");
    } else {
      window.location.href = "/";
    }
  };

  return (
    <div className="w-screen h-screen overflow-hidden bg-gradient-to-b from-white to-[#135058] animated-gradient font-sans relative">
      <div className="absolute top-0 left-0 w-full h-full -z-10" />

      <div className="max-w-sm mx-auto mt-24 mb-10 bg-[rgba(57,89,116,0.85)] text-white px-6 py-10 shadow-[1px_1px_10px_black,6px_6px_0px_#344454,10px_10px_10px_black] pt-16 relative rounded">
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#344455] p-5 rounded-full shadow-[0_0_9px_2px_#344454] text-center">
          <i className="fa fa-sign-in text-2xl text-white" />
        </div>

        <div className="text-center text-md mb-5">
          <strong>Welcome,</strong> please login
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <input
              type="text"
              placeholder="Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-[rgba(40,52,67,0.75)] border border-[#4a525f] text-white px-5 py-2 pl-6 pr-12 focus:outline-none focus:border-l-4 focus:border-[#ccd8da] border-l-4 border-[#93a5ab] text-sm"
            />
            <i className="fa fa-user absolute top-2.5 right-5 text-[#93a5ab] text-sm" />
          </div>

          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[rgba(40,52,67,0.75)] border border-[#4a525f] text-white px-5 py-2 pl-6 pr-12 focus:outline-none focus:border-l-4 focus:border-[#ccd8da] border-l-4 border-[#93a5ab] text-sm"
            />
            <i className="fa fa-lock absolute top-2.5 right-5 text-[#93a5ab] text-sm" />
          </div>

          {error && <p className="text-red-400 text-sm text-center">{error}</p>}

          <button
            type="submit"
            className="w-full border-2 border-[#93a5ab] text-white py-2 text-sm hover:border-white hover:shadow-inner hover:bg-[#7692A7] transition duration-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
