import { SignInButton, SignedOut } from '@clerk/clerk-react'
import React from 'react'

const BlankState = () => {
    return (
        <div className='h-[92vh]'>
            <div class="bg-cover bg-center w-full h-[90%] flex  bg-[url('https://images.pexels.com/photos/4476377/pexels-photo-4476377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]" >
                <div className="w-1/3 mx-auto flex flex-col justify-center text-center">
                    <div className=' mb-8 text-4xl text-[white] uppercase font-bold font-Roboto'>
                        EXPLORE. CREATE. INSPIRE
                    </div>
                    <p className="text-sm text-white font-Roboto my-4 shadow-dark">
                        Meet Notespace — your ultimate web app for capturing ideas, organizing thoughts, and managing tasks effortlessly. Whether you're jotting down a quick reminder, outlining a complex project, or storing inspirational snippets, Notespace offers a sleek, intuitive interface that makes note-taking seamless and enjoyable. With features like real-time sync, customizable tags, and robust search capabilities, you can keep all your notes perfectly organized and accessible across all devices. Dive into a more organized life with Notespace, where your thoughts are safe and your productivity soars!
                    </p>
                    <div className='cursor-pointer font-bold flex justify-center  '>
                        <SignedOut>
                            <SignInButton style={{ color: '#fff', padding: "10px 20px", borderRadius: '6px', backgroundColor: '#faa41f', width: '100%' }} />
                        </SignedOut>
                    </div>
                </div>
                <div className='h-[200px] w-[4px] bg-[#faa41f]'></div>
            </div>

            <div className="bg-[#faa41f] w-full h-[10%]"></div>
        </div>
    )
}
export default BlankState
