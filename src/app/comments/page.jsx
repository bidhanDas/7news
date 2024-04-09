import PlainLayout from '@/components/PlainLayout'
import UserCommentList from '@/components/UserCommentList'
import { cookies } from 'next/headers';
import React from 'react'


async function getData(cookies) {
  const option = {method: 'GET', headers: {'Cookie': cookies}, cache: 'no-store'};
  const res  = await fetch(`${process.env.HOST}/api/comments/manage`,option);
  return res.json();
}
//may be as "server component"

const page = async () => {

  const cookieStore = cookies();
  const data = await getData(cookieStore);

  return (
    <PlainLayout>
      <UserCommentList x={data}></UserCommentList>
    </PlainLayout>
  )
}

export default page