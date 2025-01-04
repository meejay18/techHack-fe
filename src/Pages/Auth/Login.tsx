// import React from "react";
import { useState } from "react";
import { logInUser } from "../../API/userApi";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const togglePassword = () => setShowPassword(!showPassword);
  // const [showPassword, setShowPassword] = useState<boolean>(false);
  // const togglePassword = () => setShowPassword(!showPassword);

  const handleSubmit = (e: any) => {
    setLoading(true);
    e.preventDefault();

    logInUser({ email, password }).then((res) => {
      if (res.status === 201) {
        navigate("/au");
      } else {
        toast.error("Error");
      }
    });
  };
  return (
    <div>
      <Toaster />
      <div className="w-full h-screen  bg-[#011B33] justify-center flex flex-col  gap-3 items-center">
        <div className="w-[90%] h-[40%] sm:w-[30%] sm:h-[55%] bg-[white] rounded-md justify-center flex items-center ">
          <div className="w-[90%] h-[80%]   bg-white text-center">
            <div className="text-[20px] font-bold">SIGN IN TO YOUR ACCOUNT</div>
            <div>
              <input
                placeholder="Email"
                className="border w-[90%] rounded-[10px] h-[35px] p-2 mt-7 text-[15px] sm:text-[15px] outline-none bg-gray-100"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="relative">
                <input
                  placeholder="password"
                  className="border w-[90%] p-2 h-[35px] rounded-[10px] text-[15px] sm:text-[15px] mt-5 outline-none bg-gray-100"
                  type={showPassword ? `text` : `password`}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  className="relative bottom-6 left-[300px]"
                  onClick={togglePassword}
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
            </div>
            <button
              disabled={loading}
              type="submit"
              className={`${
                loading
                  ? "bg-green-700 cursor-not-allowed animate-pulse text-white border rounded-md px-[120px] py-[4px] "
                  : "border rounded-md w-[95%]  justify-center h-[35px] sm:p-[10px] flex items-center mt-3 bg-green-400 text-[15px] font-bold  text-white"
              }`}
              onClick={handleSubmit}
            >
              {loading ? `loading` : `Sign Up`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
