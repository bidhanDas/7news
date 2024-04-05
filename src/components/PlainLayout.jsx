import React from 'react'
import AppNavBar from './AppNavBar'
import Footer from './Footer'
import { Toaster } from 'react-hot-toast'
import { cookies } from 'next/headers';

async function getData1(){
    const res = await fetch(`${process.env.HOST}/api/category`,{cache:'no-cache'});
    return res.json();
}
  
async function getData2(){
    const res = await fetch(`${process.env.HOST}/api/social`,{cache:'no-cache'});
    return res.json();
}

const PlainLayout = async (props) => {

  const x =await getData1(); // x = {status:"success",data:result}, result = json array (of objects)
  const y =await getData2();

  const z = cookies() //instance/object
  const token = z.get('token')

  let isLogin=false

    if(typeof token === "undefined"){    // expires: expireDuration
        isLogin=false
    }
    else{
        isLogin=true
    }

  return (
    <div>
        <AppNavBar isLogin={isLogin} data={x} data2={y}></AppNavBar>
        {props.children}
        <Toaster position="bottom-center"></Toaster>
        <Footer data={x} data2={y}></Footer>
    </div>
  )
}

export default PlainLayout