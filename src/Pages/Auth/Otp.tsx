// import React from "react";

const Otp = () => {
  return (
    <div>
      <div>
        <div className="w-full h-screen bg-[#011B33] justify-center flex flex-col  gap-3 items-center">
          <div className="w-[30%] h-[45%] bg-[white] rounded-md justify-center flex items-center ">
            <div className="w-[90%] h-[80%] flex flex-col gap-[20px] bg-white text-center">
              <div className="text-[15px] font-medium">
                A one time password was sent to your email, Enter the code below
                to complete your verification.
              </div>
              <div>
                <input
                  placeholder="OTP"
                  className="border w-[90%] h-[35px] mt-5 outline-none bg-gray-100"
                  type="text"
                />
              </div>
              <div>
                <button className="border rounded-md w-[90%] h-[35px] mt-3 bg-green-400 text-[13px]  text-white">
                  VERIFY
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;
