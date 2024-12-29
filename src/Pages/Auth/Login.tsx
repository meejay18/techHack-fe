import React from "react";

const Login = () => {
  return (
    <div>
      <div className="xl:w-full xl:h-screen  bg-[#011B33] justify-center flex flex-col  gap-3 items-center">
        <div></div>
        <div className="lg:w-[30%]  lg:h-[55%]  md:h-full md:w-full sm:flex sm:justify-center sm:items-center  bg-[white] rounded-md justify-center flex items-center ">
          <div className="w-[90%] h-[80%]   bg-white text-center">
            <div className="text-[13px] font-medium">
              SIGN IN TO YOUR ACCOUNT
            </div>
            <div>
              <input
                placeholder="Email Address"
                className="border w-[90%] h-[35px] mt-7 outline-none bg-gray-100"
                type="text"
              />
              <input
                placeholder="password"
                className="border w-[90%]  h-[35px] mt-5 outline-none bg-gray-100"
                type="text"
              />
            </div>
            <button className="border rounded-md w-[90%] h-[35px] mt-7 bg-green-400 text-[13px]  text-white">
              SIGN IN
            </button>
            <div>
              <a className="text-[13px] text-[blue] underline" href="">
                Login with passkeys
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
