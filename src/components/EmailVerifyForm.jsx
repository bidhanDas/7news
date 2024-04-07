"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import toast from 'react-hot-toast';


const EmailVerifyForm = () => {

    let [email,setEmail] = useState("");

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    let [submit,setSubmit] = useState(false);

    const EmailRegx = /\S+@\S+\.\S+/;

    let router = useRouter();

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (email == '' || !EmailRegx.test(email)){
            toast.error("Valid Email Address Required!")
        }
        else{
            setSubmit(true);

            let res = await (await fetch(`/api/user/recover/verifyEmail?email=${email}`)).json();

            setSubmit(false);

            if(res.status==="success"){
                toast.success("Request Completed!");

                sessionStorage.setItem("email",email);

                // setEmail(email);

                alert(`Your OTP is : ${res.data.otp}`)

                router.push("/user/otpVerify")
            }
            else {
                toast.error("Invalid Request!")
            }
        }
    }


  return (
    <div className="row justify-content-center mt-4">
        <div className="col-md-4 col-lg-4 col-sm-12 col-12">
            <div className="card p-5">
                <h5 className="mb-3">Email Address</h5>
                <label className="form-label">User Email</label>
                <input value={email} onChange={handleEmail} type="email" className="form-control mb-2"/>
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

export default EmailVerifyForm