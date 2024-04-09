import React from 'react'
import styles from './page.module.css'
import PlainLayout from '@/components/PlainLayout'
import Hero from '@/components/Hero'
import NewsList from '@/components/NewsList'
import PopularList from '@/components/PopularList'

async function getData1(){
  const res = await fetch(`${process.env.HOST}/api/news/type?type=Slider`,{cache:'no-cache'});
  return res.json();
}
async function getData2(){
  const res = await fetch(`${process.env.HOST}/api/news/type?type=Featured`,{cache:'no-cache'});
  return res.json();
}
async function getData3(){
  const res = await fetch(`${process.env.HOST}/api/news/latest`,{cache:'no-cache'});
  return res.json();
}
async function getData4(){
  const res = await fetch(`${process.env.HOST}/api/news/type?type=Popular`,{cache:'no-cache'});
  return res.json();
}

const page = async () => {
  const x1 = await getData1();
  const x2 = await getData2();
  
  const x3 = await getData3();
  const x4 = await getData4();
  return (
    <div>
      <PlainLayout>
        <Hero slider={x1} featured={x2}></Hero>
        <div className='container mt-4'>
          <h5>LATEST</h5>
          <hr />
          <div className="row">
            <div className="col-md-9 col-lg-9 col-sm-12 col-12 px-3">
              <NewsList latest={x3}/>
            </div>
            <div className="col-md-3 col-lg-3 col-sm-12 col-12 px-3">
              <PopularList popular={x4}/>
            </div>
          </div>
        </div>
      </PlainLayout>
    </div>
  )
}

export default page