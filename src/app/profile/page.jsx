import PlainLayout from '@/components/PlainLayout'
import ProfileForm from '@/components/ProfileForm'
import { cookies } from 'next/headers'
import React from 'react'

async function getData(cookies) {
  const option={method: 'GET', headers: {'Cookie': cookies}, cache: 'no-store'};
  const res = await fetch(`${process.env.HOST}/api/user/profile/details`,option);
  return res.json();
}
//may be as "server component"

const page = async () => {

  const cookieStore = cookies();
  const data = await getData(cookieStore);

  return (
    <PlainLayout>
      <ProfileForm x={data}></ProfileForm>
    </PlainLayout>
  )
}

export default page