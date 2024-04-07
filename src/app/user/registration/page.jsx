import PlainLayout from '@/components/PlainLayout'
import SignUpForm from '@/components/SignUpForm'
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react'

const page = () => {

  const cookieStore = cookies();
  const token = cookieStore.get('token');

    if(typeof token!=='undefined'){
      redirect('/')
    }

  return (
    <PlainLayout>
      <SignUpForm></SignUpForm>
    </PlainLayout>
  )
}

export default page