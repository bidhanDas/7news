import PlainLayout from '@/components/PlainLayout'
import ProfileForm from '@/components/ProfileForm'
import { cookies } from 'next/headers'
import React from 'react'

async function getData(cookies) {
  const option={method: 'GET', headers: {'Cookie': cookies}, cache: 'no-store'}; //cookie decode hoye gesilo, punoray cookie ta dhore set kore dilam, as "datails" api a jawar ageo middleware diye jabe
  const res = await fetch(`${process.env.HOST}/api/user/profile/details`,option);
  return res.json();
}

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