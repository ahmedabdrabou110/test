import React, { useState } from 'react'
import { BsFillShieldLockFill } from "react-icons/bs";
import {CgSpinner} from "react-icons/cg"
import OtpInput from "otp-input-react";
import "../index.css"
const AuthentiactionEmail = () => {
    const [otp ,setOtp] = useState("");
    const [loading , setloading] = useState(false)
  return (
    <section className='bg-emerald-500 flex items-center justify-center h-screen'>
        <div className='w-80 flex flex-col gap-4 rounded-lg p-4'>
            <h1 className='text-center leading-normal text-white font-medium text-xl mb-6'>
                To Contiue to complete the processing of buy
            </h1>
            <div className='bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full'>
                <BsFillShieldLockFill size={35} />
            </div>
            {/* <label htmlFor='email' className='font-bold text-2xl text-white text-center'>
                Enter your OTP
            </label>
            <OtpInput 
                OTPLength={6} 
                otpType="number" 
                value={otp} 
                onChange={setOtp} 
                autoFocus 
                disabled={false} 
                className="opt-container" /> */}

<label htmlFor='phone' className='font-bold text-xl text-white text-center'>
                Verify your Phone Number
            </label>
            <PhoneInput country={"in"} value={phone} onChange={setPhone} />


            <OtpInput 
                OTPLength={6} 
            <button className='bg-emerald-600 w-full flex gap-1 items-center justify-center  py-2.5 text-white rounded'>
                {loading && <CgSpinner size={20} className='animate-spin mt-1' />}
                <span>Verify OTP</span>
            </button>
        </div>
    </section>
  )
}

export default AuthentiactionEmail