import PinVerifyForm from '@/components/PinVerifyForm'
import PlainLayout from '@/components/PlainLayout'
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react'

const page = async () => {

  const cookieStore = cookies();
  const token = cookieStore.get('token');

  if(typeof token!=='undefined'){
    redirect('/')
  }

  return (
    <PlainLayout>
        <PinVerifyForm></PinVerifyForm>
    </PlainLayout>
  )
}

export default page