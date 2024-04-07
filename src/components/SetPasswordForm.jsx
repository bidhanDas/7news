"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const SetPasswordForm = () => {

    const x = sessionStorage.getItem("email");
    const y = sessionStorage.getItem("otp");

    let [data,setData] = useState({email:x, otp:y,password:""})
    let [submit,setSubmit] = useState(false)
    let router = useRouter()

    const inputOnChange = (name,value) => {
        setData((data)=>({
            ...data,
            [name]: value
        }))
    }

    const handleSubmit = async () => {
        if(data.password == ""){
            toast.error("Password Required!")
        }
        else {
            setSubmit(true);

            const options={method:'POST', body:JSON.stringify(data)}
            let res = await (await fetch(`/api/user/recover/resetPassword`,options)).json();

            setSubmit(false);

            if(res.status == "success"){
                toast.success("Request Completed!");
                sessionStorage.clear();
                router.push("/user/login")
            }
            else {
                ErrorToast("Invalid Request!")
            }
        }
    }

  return (
    <div className="row justify-content-center mt-4">
        <div className="col-md-4 col-lg-4 col-sm-12 col-12 ">
            <div className="card p-5">
                <h5 className="mb-3">New Password</h5>
                <input value={data.password} onChange={(e) => {inputOnChange('password', e.target.value)}} type="password" className="form-control mb-2"/>
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

export default SetPasswordForm