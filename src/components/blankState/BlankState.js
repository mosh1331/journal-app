import { SignInButton, SignedOut } from '@clerk/clerk-react'
import React from 'react'

const BlankState = () => {
  return (
    <div  class="bg-cover bg-center w-full h-[90vh] bg-[url('https://images.pexels.com/photos/4476377/pexels-photo-4476377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]" >
      <div className=' mb-8 text-3xl'>
        Welcome to Note app
      </div>
      <div className='cursor-pointer font-bold '>
        <SignedOut>
          <SignInButton style={{ color: 'blue' }} />
        </SignedOut>
      </div>
    </div>
  )
}
export default BlankState
