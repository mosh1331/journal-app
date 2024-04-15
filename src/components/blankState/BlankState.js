import React from 'react'

const BlankState = () => {
    return (
        <div className="w-full">
            <div className='border-1 border-slate-700 w-full h-[300px] outline-dashed grid place-content-center mb-8 text-3xl'>No Notes added </div>
            <div className='border-1 w-full h-[100px] border-slate-700 cursor-pointer outline-dashed grid place-content-center font-bold '>Add Note</div>
        </div>
    )
}
export default BlankState