import { Modal } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

const ModalView = ({ isVisibile, note, onModalClose }) => {
    return (
        <Modal
            open={isVisibile}
            onClose={onModalClose}
        >
            <div className="p-12 rounded bg-white mx-auto w-1/2 h-[80%] mt-12 relative">
                <div onClick={onModalClose} className="h-6 w-6 absolute top-[10px] right-[10px] cursor-pointer">
                    <CloseIcon />
                </div>
                <h3 className='font-bold text-[20px]'>{note?.journalTitle}</h3>
                <p className='text-[16px] mt-4 text-[#595454]'>{note?.journalDescription}</p>
            </div>
        </Modal>
    )
}

export default ModalView