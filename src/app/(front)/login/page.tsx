import LoginForm from '@/components/front/Auth/LoginForm'
import Image from 'next/image'
import React from 'react'

const LoginPage = () => {
  return (
    <div className='h-screen bg-slate-100 py-8' >
      <div className=' overflow-hidden grid md:grid-cols-2 grid-cols-1 w-full max-w-5xl mx-auto  bg-white border border-gray-200 rounded-xl shadow-lg '>
        <div className='hidden md:flex bg'>
            {/* <Image src='/img/front/doctor.jpg' alt='doctor' width={850} height={500} objectFit='contain'/> */}
        </div>
        <div className=''>
          <LoginForm/>
        </div>
      </div>

    </div>
  )
}

export default LoginPage