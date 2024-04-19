import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import { Button, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const NoteCard = ({ note, onDelete, onEdit, onView }) => {
    const [anchorEl, setAnchorEl] =useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
        <div className='rounded p-4 h-[200px] w-[300px] border-2 relative cursor-pointer' >
            <h3>{note?.title}</h3>
            <p>{note?.content}</p>
            <div 
             id="basic-button"
             aria-controls={open ? 'basic-menu' : undefined}
             aria-haspopup="true"
             aria-expanded={open ? 'true' : undefined}
            onClick={handleClick} className="absolute  top-[10px] right-[10px] h-[20px] ">
            <MoreVertIcon />
            </div>
            <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}><p  className=' text-sm'>Edit</p></MenuItem>
        <MenuItem onClick={()=>onView(note)}><p  className=' text-sm'>View</p> </MenuItem>
        <MenuItem onClick={handleClose}><p  className='text-[tomato] text-sm'>Delete</p> </MenuItem>
       
      </Menu>
            {/* <div className="absolute w-1/2 bottom-[10px] right-[10px] h-[20px] flex items-center gap-2 justify-end ">
                <div className="w-[20px] h-[20px] cursor-pointer hover:shadow-outline">
                    <DeleteIcon style={{fontSize:'20px', color:'tomato'}} />
                </div>
                <div className="w-[20px] h-[20px] cursor-pointer hover:shadow-outline">
                    <EditIcon style={{fontSize:'20px', color:'green'}} />
                </div>
                <div onClick={()=>onView(note)} className="w-[20px] h-[20px] cursor-pointer hover:shadow-outline">
                    <RemoveRedEyeIcon style={{fontSize:'20px', color:'grey'}} />
                </div>
            </div> */}
        </div>
    )
}

export default NoteCard