// import React from "react";
// import { useState } from "react";
// import { Link } from "react-router-dom";

// // const Register = () => {
// //   return (
// //     <div className="w-full h-screen bg-[#011B33] justify-center flex flex-col  gap-3 items-center">
// //       <div>{/* <img className="w-[120px] h-[50px]" src={pix} alt="" /> */}</div>
// //       <div className="w-[30%] h-[50%] bg-[white] justify-center flex items-center ">
// //         <div className="w-[90%] h-[80%] bg-white text-center">
// //           <div className="text-[13px] font-medium">LOG IN TO YOUR ACCOUNT</div>
// //           <div>
// //             <input
// //               placeholder="Email Address"
// //               className="border w-[90%] h-[35px] mt-5 outline-none bg-gray-100"
// //               type="text"
// //             />
// //             <input
// //               placeholder="......."
// //               className="border w-[90%]  h-[35px] mt-2 outline-none bg-gray-100"
// //               type="text"
// //             />
// //           </div>
// //           <button className="border rounded-md w-[90%] h-[35px] mt-3 bg-green-400 text-[13px]  text-white">
// //             Log In
// //           </button>
// //           <div>
// //             <a className="text-[13px] text-[blue] underline" href="">
// //               Log in with passkeys
// //             </a>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// const Register = () => {
//   const [email, setEmail] = useState<string>("");
//   const [userName, setUserName] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [avatar, setAvatar] = useState<string>("");

//   const handleImage = (e: any) => {
//     setAvatar(e.target.files[0]);
//   };

//   const handleSubmit = (e: any) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("userName", userName);
//     formData.append("email", email);
//     formData.append("password", password);
//     formData.append("image", avatar);

//     // createUser(formData);
//   };

//   return (
//     <div className="ml-4">
//       <h1>Register Page</h1>
//       <p>Welcome to the registration page.</p>
//       <form onSubmit={handleSubmit} className="flex flex-col">
//         <br />
//         <br />
//         <br />
//         <label
//           htmlFor="avatar"
//           className="p-3 bg-black text-white w-[200px] flex justify-center "
//         >
//           avatar
//           <input
//             type="file"
//             name="username"
//             className="hidden"
//             id="avatar"
//             onChange={handleImage}
//           />
//         </label>
//         <br />
//         <br />
//         <label>Username:</label>
//         <input
//           type="text"
//           name="username"
//           className="border w-[300px] h-[45px] rounded-md "
//           value={userName}
//           onChange={(e) => setUserName(e.target.value)}
//         />
//         <br />
//         <label>email:</label>{" "}
//         <input
//           type="text"
//           name="username"
//           className="border w-[300px] h-[45px] rounded-md "
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <br />
//         <label>Password:</label>{" "}
//         <input
//           // type="password"
//           // name="password"
//           className="border w-[300px] h-[45px] rounded-md "
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <br />
//         <button type="submit" className="w-[300px] mb-4">
//           Submit
//         </button>
//       </form>
//       <p>
//         Already have an account? <Link to="/auth/login">Login</Link>
//       </p>
//     </div>
//   );
// };

// export default Register;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { createAccount } from "../../API/userApi";

const Register = () => {
  const navigate = useNavigate();
  const [name, setname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (e: any) => {
    setLoading(true);
    e.preventDefault();

    createAccount({ name, email, password }).then((res) => {
      if (res.status === 201) {
        navigate("/auth/otp");
      } else {
        return toast.error("error creating user");
      }
    });
  };
  return (
    <div>
      <Toaster />
      <div className="w-full h-screen   bg-[#011B33] justify-center flex flex-col  gap-3 items-center">
        <div></div>
        <div className="w-[90%] h-[95%] sm:w-[30%] sm:h-[75%]  bg-[white] rounded-md justify-center  flex-col flex items-center ">
          <form
            onSubmit={handleSubmit}
            className="w-[90%] h-[80%] flex flex-col justify-center items-center gap-[20px] bg-[white] text-center "
          >
            <div className="text-[13px] font-medium">
              SIGN UP TO YOUR ACCOUNT
            </div>
            <div>
              <input
                placeholder="Name"
                className="border w-[90%] h-[35px] mt-5 outline-none bg-gray-100"
                type="name"
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
              <input
                placeholder="Email Address"
                className="border w-[90%] h-[35px] mt-5 outline-none bg-gray-100"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                placeholder="Password"
                className="border w-[90%]  h-[35px] mt-5 outline-none bg-gray-100"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              disabled={loading}
              type="submit"
              className={`${
                loading
                  ? "bg-green-700 cursor-not-allowed animate-pulse text-white border rounded-md px-[120px] py-[4px] "
                  : "border rounded-md w-[95%]  text-center h-[35px] mt-3 bg-green-400 text-[13px]  text-white"
              }`}
              onClick={handleSubmit}
            >
              {loading ? `loading` : `Sign Up`}
            </button>
          </form>
          <div>
            <p className="text-[13px] text-[blue]">
              Already have an account?
              <Link className="underline" to={"/auth/login"}>
                signIn
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
