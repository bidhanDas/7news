import LoginForm from '@/components/LoginForm'
import PlainLayout from '@/components/PlainLayout'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import React from 'react'

const page = () => {
  
  //login kora thakle ai page a aste parbe na, url modify koreo na
  const z = cookies();
  const token = z.get('token');

  if(typeof token!=='undefined'){  // expires: expireDuration
    redirect('/')
  }

  return (
    <div>
      <PlainLayout>
        <LoginForm></LoginForm>
      </PlainLayout>
    </div>
  )
}

export default page