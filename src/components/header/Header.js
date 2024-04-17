import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser
} from '@clerk/clerk-react'
import React from 'react'

const Header = () => {
  const {user} = useUser()

  return (
    <div className='bg-[tomato] flex items-center justify-between p-8'>
      <div className="">
      <p className='text-2xl text-white'>Note app</p>
      <p className='text-sm  text-[#ccc]'>{user?.fullName}</p>
      </div>
      <SignedOut>
        <SignInButton  style={{color:'#fff'}}/>
      </SignedOut>
      <SignedIn>
        <UserButton afterSignOutUrl="/"  />
      </SignedIn>
    </div>
  )
}

export default Header
