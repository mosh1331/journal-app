import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'

function EditNoteForm ({ onNoteUpdate, closeModal, selectedNote }) {
    console.log(selectedNote,'selectedNote')
  const [title, setTitle] = useState(selectedNote?.journalTitle)
  const [content, setContent] = useState(selectedNote?.journalDescription)

  const handleSubmit = e => {
    e.preventDefault()
    if (!title.trim() || !content.trim()) return
    const id = selectedNote?.journalID
    onNoteUpdate({ title, content, id })
    setTitle('')
    setContent('')
  }

  const onClose = () => {
    setTitle('')
    setContent('')
    closeModal()
  }
  return (
    <form
      onSubmit={handleSubmit}
      className='p-12 rounded bg-white mx-auto w-1/2 h-[80%] mt-12 relative '
    >
      <div
        onClick={onClose}
        className='h-6 w-6 absolute top-[10px] right-[10px] cursor-pointer'
      >
        <CloseIcon />
      </div>
      <div className='mb-4'>
        <label htmlFor='title' className='block text-gray-700 font-bold mb-2'>
          Title:
        </label>
        <input
          type='text'
          id='title'
          value={title}
          onChange={e => setTitle(e.target.value)}
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />
      </div>
      <div className='mb-4'>
        <label htmlFor='content' className='block text-gray-700 font-bold mb-2'>
          Content:
        </label>
        <textarea
          id='content'
          value={content}
          onChange={e => setContent(e.target.value)}
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline min-h-[50vh]'
        ></textarea>
      </div>
      <button
        type='submit'
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
      >
        Update Note
      </button>
      <button
        onClick={onClose}
        className='bg-[tomato] ml-2 hover:bg-[#db5959] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
      >
        Cancel
      </button>
    </form>
  )
}

export default EditNoteForm
