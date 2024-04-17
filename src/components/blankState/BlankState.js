import { SignInButton, SignedOut } from '@clerk/clerk-react'
import React from 'react'

const BlankState = () => {
    return (
        <div className="w-full mt-12">
            <div className='border-1 border-slate-700 w-full h-[60vh] outline-dashed grid place-content-center mb-8 text-3xl'>Welcome to Note app</div>
            <div className='border-1 w-full h-[100px] border-slate-700 cursor-pointer outline-dashed grid place-content-center font-bold '> <SignedOut>
        <SignInButton style={{color:'blue'}}  />
      </SignedOut></div>
        </div>
    )
}
export default BlankState