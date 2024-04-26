"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const ProfileForm = (props) => {

    let [data,setData] = useState({
        firstName:props.x.data['firstName'], 
        lastName:props.x.data['lastName'], 
        email:props.x.data['email'], 
        mobile:props.x.data['mobile'], 
        password:props.x.data['password'], 
        otp:"0"
    })

    const inputOnChange = (name,value) => {
        setData((data)=>({
            ...data,
            [name]: value
        }))
    }

    let [submit,setSubmit]=useState(false)

    const EmailRegx = /\S+@\S+\.\S+/;

    let router = useRouter()

    const handleSubmit = async (e)=>{

        e.preventDefault();

        if (data.firstName == ''){
            toast.error("First Name Required!")
        }
        else if (data.lastName == ''){
            toast.error("Last Name Required!")
        }
        else if (data.email == '' || !EmailRegx.test(data.email)){
            toast.error("Valid Email Address Required!")
        }
        else if (data.mobile == ''){
            toast.error("Mobile No Required!")
        }
        else if (data.password == ''){
            toast.error("Password Required!")
        }

        else {
            setSubmit(true);

            const options={method:'POST', body:JSON.stringify(data)}
            let res=await (await fetch("/api/user/profile/update",options)).json();
            //ai component a to ar middleware nai

            setSubmit(false);

            if(res['status']==="success"){
                toast.success("Request Success!")
                router.refresh()
            }
            else{
                toast.error("Invalid Request!")
            }

        }

    }

  return (
    <div className="row justify-content-center mt-4">
        <div className="col-md-8 col-lg-8 col-sm-12 col-12 ">
            <div className="card p-5">
                <div className="row ">
                    <h5 className="mb-1 mx-0 px-0">User Update</h5> {/* dafault margin padding thake */}
                    <div className="col-md-4 col-lg-4 col-sm-12 p-1 col-12">
                        <label className="form-label">First Name</label>
                        <input value={data.firstName} onChange={(e) => {inputOnChange('firstName', e.target.value)}} type="text" className="form-control"/>
                    </div>
                    <div className="col-md-4 col-lg-4 col-sm-12 p-1 col-12">
                        <label className="form-label">Last Name</label>
                        <input value={data.lastName} onChange={(e) => {inputOnChange('lastName', e.target.value)}} type="text" className="form-control"/>
                    </div>
                    <div className="col-md-4 col-lg-4 col-sm-12 p-1 col-12">
                        <label className="form-label">Mobile</label>
                        <input value={data.mobile} onChange={(e) => {inputOnChange('mobile', e.target.value)}} type="text" className="form-control"/>
                    </div>
                    <div className="col-md-4 col-lg-4 col-sm-12 p-1 col-12">
                        <label className="form-label">Email</label>
                        <input value={data.email} onChange={(e) => {inputOnChange('email', e.target.value)}} type="email" className="form-control"/>
                    </div>
                    <div className="col-md-4 col-lg-4 col-sm-12 p-1 col-12">
                        <label className="form-label">Password</label>
                        <input value={data.password} onChange={(e) => {inputOnChange('password', e.target.value)}} type="password" className="form-control"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-lg-4 col-sm-12 p-1 col-12">
                        {
                          !submit &&
                          <button onClick={handleSubmit} className="btn btn-danger mt-3 w-100">Save Changes</button>
                        }

                        {
                          submit &&
                          <button disabled={true}  className="btn btn-danger mt-3 w-100"><div className="spinner-border spinner-border-sm" role="status"></div> Processing...</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileForm