import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
const NoteCard = ({ note, onDelete, onEdit, onView }) => {
    return (
        <div className='rounded p-4 h-[200px] w-[300px] border-2 relative'>
            <h3>{note?.title}</h3>
            <p>{note?.content}</p>
            <div className="absolute w-1/2 bottom-[10px] right-[10px] h-[20px] flex items-center gap-2 justify-end ">
                <div className="w-[20px] h-[20px] cursor-pointer hover:shadow-outline">
                    <DeleteIcon style={{fontSize:'20px', color:'tomato'}} />
                </div>
                <div className="w-[20px] h-[20px] cursor-pointer hover:shadow-outline">
                    <EditIcon style={{fontSize:'20px', color:'green'}} />
                </div>
                <div onClick={()=>onView(note)} className="w-[20px] h-[20px] cursor-pointer hover:shadow-outline">
                    <RemoveRedEyeIcon style={{fontSize:'20px', color:'grey'}} />
                </div>
            </div>
        </div>
    )
}

export default NoteCard