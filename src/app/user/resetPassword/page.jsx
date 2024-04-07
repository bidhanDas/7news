import PlainLayout from '@/components/PlainLayout';
import SetPasswordForm from '@/components/SetPasswordForm';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react'

const page = () => {

  const cookieStore = cookies();
  const token = cookieStore.get('token');

  if(typeof token!=='undefined'){  // expires: expireDuration
    redirect('/')
  }

  return (
    <PlainLayout>
      <SetPasswordForm></SetPasswordForm>
    </PlainLayout>
  )
}

export default page