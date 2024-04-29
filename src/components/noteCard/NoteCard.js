import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import EditIcon from '@mui/icons-material/Edit'
import { Button, Menu, MenuItem } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'

const NoteCard = ({ note, onDelete, onEdit, onView, randomUrl }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const imgUrl = note.imgURl ? note.imgURl:randomUrl 

  console.log(note , imgUrl )

  function trimString(str, maxLength = 10) {
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + '...';
    }
    return str;
  }
  
  
  return (
    <div className='rounded  h-[200px] w-[300px] border-2 relative cursor-pointer'>
      <div className="w-full h-[85%] relative ">
        <img src={imgUrl} className='w-full h-full block object-cover' alt="" />
        <p className="text-[8px] font-bold absolute font-Roboto bottom-[2px] right-[2px]">{note?.date}</p>
      </div>
      <div className="p-2">
        <h3 className='font-Roboto text-sm'>{trimString(note?.journalTitle,15)}</h3>
      </div>
      <div
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className='absolute  top-[10px] right-[10px] h-[20px] '
      >
        <MoreVertIcon />
      </div>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button'
        }}
      >
        <MenuItem onClick={() => {
          handleClose()
          onEdit(note)
        }}>
          <p className=' text-sm'>Edit</p>
        </MenuItem>
        <MenuItem onClick={() => {
          handleClose()
          onView(note)
        }}>
          <p className=' text-sm'>View</p>{' '}
        </MenuItem>
        <MenuItem onClick={() => {
          handleClose()
          onDelete(note?.journalID)
        }}>
          <p className='text-[tomato] text-sm'>Delete</p>{' '}
        </MenuItem>
      </Menu>
    </div>
  )
}

export default NoteCard
