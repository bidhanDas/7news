import PlainLayout from '@/components/PlainLayout'
import UserCommentList from '@/components/UserCommentList'
import { cookies } from 'next/headers';
import React from 'react'


async function getData(cookies) {
  const option = {method: 'GET', headers: {'Cookie': cookies}, cache: 'no-store'}; //cookie decode hoye gesilo, punoray cookie ta dhore set kore dilam, as "manage" api a jawar ageo middleware diye jabe
  const res  = await fetch(`${process.env.HOST}/api/comments/manage`,option);
  return res.json();
}

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