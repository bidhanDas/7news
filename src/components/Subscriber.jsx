"use client"
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const Subscriber = (props) => {

    const [submit,setSubmit]=useState(false)

    const EmailRegx = /\S+@\S+\.\S+/;

    const [email,setEmail] = useState('');
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleSubmit = async (e)=>{

        e.preventDefault();

        if (email == '' || !EmailRegx.test(email)){
            toast.error("Valid Email Address Required!")
        }
        else {
            setSubmit(true);

            const options={method:'POST', body:JSON.stringify({email:email})}
            let res=await (await fetch("/api/subscriber",options)).json();

            setSubmit(false);

            setEmail("");

            res.status==="success" ? (toast.success('Request Success!')) : (toast.error("Email Already Used!"));

            location.reload();

        }

    }


  return (
    <div className="card p-3 shadow-sm">
     <h6 className="text-center mb-3 mt-0">Total Subscribers</h6>
     <h6 className="text-center mb-3 mt-0 text-danger">{props.data.data._count.email}</h6>
     <input  value={email} onChange={handleEmail} type="email" placeholder="Email Address" className="form-control mb-3"/>
    
     {
        !submit &&
        <button onClick={handleSubmit} className="btn btn-danger mt-2 w-100">Subscribe</button>
     }

     {
        submit &&
        <button disabled={true}  className="btn btn-danger mt-2 w-100"><div className="spinner-border spinner-border-sm" role="status"></div> Processing...</button>
     }
    </div>
  )
}

export default Subscriber