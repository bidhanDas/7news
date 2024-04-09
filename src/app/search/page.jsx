import NewsList from '@/components/NewsList';
import PlainLayout from '@/components/PlainLayout';
import PopularList from '@/components/PopularList';
import React from 'react'

async function getData1(keyword){
  const res = await fetch(`${process.env.HOST}/api/news/search?keyword=${keyword}`,{cache:'no-cache'});
  return res.json();
}

async function getData2(){
  const res = await fetch(`${process.env.HOST}/api/news/type?type=Popular`,{cache:'no-cache'});
  return res.json();
}

const page = async (props) => {

  const keyword = props.searchParams.keyword;

  const x1 = await getData1(keyword);
  const x2 = await getData2();

  return (
    <PlainLayout>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-9 col-lg-9 col-sm-12 col-12 px-3">
            <NewsList latest={x1}/>
          </div>
          <div className="col-md-3 col-lg-3 col-sm-12 col-12 px-3">
            <PopularList popular={x2}/>
          </div>
        </div>
      </div>
    </PlainLayout>
  )
}

export default page