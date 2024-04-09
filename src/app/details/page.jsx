import CommentsList from '@/components/CommentsList';
import NewsDetails from '@/components/NewsDetails';
import PlainLayout from '@/components/PlainLayout';
import PopularList from '@/components/PopularList';
import React from 'react'

async function getData1(){
  const res = await fetch(`${process.env.HOST}/api/news/type?type=Popular`,{cache:'no-cache'});
  return res.json();
}

async function getData2(id){
  const res = await fetch(`${process.env.HOST}/api/news/details?id=${id}`,{cache:'no-cache'});
  return res.json();
}

async function getData3(id){
  const res = await fetch(`${process.env.HOST}/api/comments/news?postID=${id}`,{cache:'no-cache'});
  return res.json();
}

const page = async (props) => {

  const id = props.searchParams['id'];

  const x1 = await getData1();
  const x2 = await getData2(id);
  const x3 = await getData3(id);

  return (
    <PlainLayout>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-9 col-lg-9 col-sm-12 col-12 px-3">
            <div className='card'>
              <NewsDetails details={x2}/>
              <CommentsList postID={id} data={x3}/>
            </div>
          </div>
          <div className="col-md-3 col-lg-3 col-sm-12 col-12 px-3">
            <PopularList popular={x1}/>
          </div>
        </div>
      </div>
    </PlainLayout>
  )
}

export default page