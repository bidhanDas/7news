"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const PinVerifyForm = () => {

  let router = useRouter();

  const x = sessionStorage.getItem("email");

  let [data,setData]=useState({email:x, otp:""});
  let [submit,setSubmit]=useState(false);

  const inputOnChange = (name,value) => {
    setData((data)=>({
        ...data,
        [name]: value
    }))
  }

  const handleSubmit=async (e)=>{

    e.preventDefault();

    if(data.otp == ""){
      toast.error("Valid PIN Required!")
    }
    else {
        setSubmit(true);

        const options={method:'POST', body:JSON.stringify(data)}
        let res=await (await fetch(`/api/user/recover/verifyOTP`,options)).json();

        setSubmit(false);

        if(res.status =="success"){
          toast.success("Request Completed!");
          sessionStorage.setItem("otp",data.otp);
          router.push("/user/resetPassword");
        }
        else {
          toast.error("Invalid Request!")
        }
    }
}


  return (
    <div className="row justify-content-center mt-4">
      <div className="col-md-4 col-lg-4 col-sm-12 col-12 ">
        <div className="card p-5">
          <h3 className='text-danger'>Have you noticed the <strong>ALERT</strong>  on previous page, <span>there was your <b>OTP</b> !</span></h3>
        </div>
        <div className="card p-5">
          <h5 className="mb-3">6 Digit Code</h5>
          <input value={data.otp} onChange={(e) => {inputOnChange('otp', e.target.value)}} type="text" placeholder="XXXXXX" className="form-control mb-2"/>
          {
            !submit &&
            <button onClick={handleSubmit} className="btn btn-danger mt-3">Next</button>
          }
          {
            submit &&
            <button disabled={true}  className="btn btn-danger mt-3"><div className="spinner-border spinner-border-sm" role="status"></div> Processing...</button>
          }
        </div>
      </div>
    </div>
  )
}

export default PinVerifyForm