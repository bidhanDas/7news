import PlainLayout from '@/components/PlainLayout'

import HTMLReactParser from 'html-react-parser';
// import parse from "html-react-parser";

import React from 'react'

async function getData(){
  const res = await fetch(`${process.env.HOST}/api/policy?type=Privacy`,{cache:'no-cache'}); //privacy = Privacy, DB te jvabe ase
  return res.json();
}

const page = async () => {

  const x = await getData();

  return (
    <PlainLayout>
      <div className='container mt-3'>
        <div className='row'>
          <div className='col-12'>
            <div className='card p-4'>
              {HTMLReactParser(x.data[0]['long_des'])}
              {/* {parse(x.data[0].long_des)} */}
            </div>
          </div>
        </div>
      </div>
    </PlainLayout>
  )
}

export default page