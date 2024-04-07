"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const LoginForm = () => {

    const EmailRegx = /\S+@\S+\.\S+/;

    const [submit,setSubmit]=useState(false)

    const [email,setEmail] = useState('');
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const [password,setPassword] = useState('');
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async (e)=>{

        e.preventDefault();

        if (email == '' || !EmailRegx.test(email)){
            toast.error("Valid Email Address Required!")
        }
        else if (password==''){
            toast.error("Valid Password Required!")
        }
        else {
            setSubmit(true);

            const options={method:'POST', body:JSON.stringify({email:email,password:password})}
            let res=await (await fetch("/api/user/login",options)).json();


            setSubmit(false);

            setEmail("");
            setPassword('');

            if(res.status==="success"){
                toast.success("Request Completed!");
                window.location.href="/"  // profile page/comment page ao nite pari
            }
            else {
                toast.error("Invalid Request!")
            }

        }

    }

  return (
    <div className="row center-screen d-flex align-items-center justify-content-center">
            <div className="col-md-4 col-lg-4 col-sm-12 col-12">
                <div  className="card p-5">

                    <h5 className="mb-3">User Login</h5>
                    <label className="form-label">User Email</label>
                    <input value={email} onChange={handleEmail} type="email" className="form-control mb-2"/>

                    <label className="form-label">User Password</label>
                    <input value={password} onChange={handlePassword} type="password" className="form-control mb-1"/>
                    {
                      !submit &&
                      <button onClick={handleSubmit} className="btn btn-danger mt-3 w-100">Login</button>
                    }

                   {
                      submit &&
                      <button disabled={true}  className="btn btn-danger mt-3 w-100"><div className="spinner-border spinner-border-sm" role="status"></div> Processing...</button>
                    }

                    <div className="my-3 d-flex">
                        <Link href="/user/registration" className="nav-link mx-2">Sign Up |</Link>
                        <Link href="/user/emailVerify" className="nav-link">Forget Password</Link>
                    </div>

                </div>
            </div>
        </div>
  )
}

export default LoginForm