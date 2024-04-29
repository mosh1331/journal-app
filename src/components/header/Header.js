import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser
} from '@clerk/clerk-react'
import React from 'react'

const Header = () => {
  const { user } = useUser()

  return (
    <div className='bg-[#fff] flex items-center justify-between p-8 shadow-md h-[8vh]' >
      <div className=''>
        <p className='text-2xl text-black'>Note Space</p>
        <p className='text-sm  text-[#ccc]'>{user?.fullName}</p>
      </div>
      <SignedOut>
        <SignInButton style={{ color: '#faa41f',fontWeight:'bold',border:'2px solid #faa41f',borderRadius:'25px', padding:'10px 20px' }} />
      </SignedOut>
      <SignedIn>
        <UserButton afterSignOutUrl='/' />
      </SignedIn>
    </div>
  )
}

export default Header
