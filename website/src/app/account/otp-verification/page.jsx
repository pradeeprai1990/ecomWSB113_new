"use client"
import React, { useState } from 'react'

import PinInput from "react-pin-input";

export default function OtpVerification() {
  let [OTP, setOTP] = useState("");
  let handleOTP = (value) => {
    setOTP(value);
  };

  let verifyOTP=(event)=>{
    event.preventDefault()
    console.log(OTP)
  }
  return (
<div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
  <div class="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
    <div class="mx-auto flex w-full max-w-md flex-col space-y-10">
      <div class="flex flex-col items-center justify-center text-center space-y-2">
        <div class="font-semibold text-3xl">
          <p>Email Verification</p>
        </div>
        <div class="flex flex-row text-sm font-medium text-gray-400">
          <p>We have sent a code to your email ba**@dipainhouse.com</p>
        </div>
      </div>

      <div>
        <form>
          <div class="flex flex-col space-y-4">
          <div>
                  <div class="flex items-center justify-center px-6 py-5  mx-auto w-full">
                    <PinInput
                      name="ForgetOTP"
                      length={4}
                      required
                      placeholder="0"
                      type="numeric"
                      onChange={(value) => handleOTP(value)}
                      value={OTP}
                    />
                  </div>
                  <div>
                    <button
                      onClick={verifyOTP}
                      className="border-2 w-full mx-auto table py-3 px-16 bg-black hover:bg-white text-white duration-500 hover:text-black hover:shadow-[5px_5px_0px_0px_#666] border-black font-medium rounded-md"
                    >
                      Verify Account
                    </button>
                  </div>
                </div>

            <div class="flex flex-col">
              <div class="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                <p>Didn't recieve code?</p> <div class="flex hover:underline flex-row items-center text-blue-600 cursor-pointer">Resend OTP</div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
  )
}
