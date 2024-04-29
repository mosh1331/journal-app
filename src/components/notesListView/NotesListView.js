import React, { useEffect, useState } from 'react'
import AddNoteForm from '../addNoteForm/AddNoteForm'
import NoteCard from '../noteCard/NoteCard'
import ModalView from '../modalView/ModalView'
import { Modal } from '@mui/material'
import axios from 'axios'
import { useUser } from '@clerk/clerk-react'
import EditNoteForm from '../editNoteForm/EditNoteForm'

function NotesListView () {
  const [notes, setNotes] = useState([])
  const [selectedNote, setSelectedNote] = useState()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isAddFormVisible, setIsAddFormVisible] = useState(false)
  const [isEditFormVisible, setIsEditFormVisible] = useState(false)

  const { user } = useUser()
  const Base_Url = 'http://localhost:8080/'

  const handleAddNote = async newNote => {
    const { title, content, mediaFileUrl, date } = newNote
    const data = { title: title, description: content, userID: user?.id,journalImage:mediaFileUrl,date:date}
    await axios
      .post(`${Base_Url}add-journal`, data)
      .then(res => console.log(res, 'res'))
      .catch(err => console.log(err, 'error'))
    setIsAddFormVisible(false)
  }

  const handleUpdateNote = async note => {
    const { title, content, id } = note
    const data = { journalTitle: title, journalDescription: content }
    await axios
      .put(`${Base_Url}update-journal/${id}`, data)
      .then(res => console.log(res, 'res'))
      .catch(err => console.log(err, 'error'))
    setIsEditFormVisible(false)
  }

  const onDelete = async journalID => {
    //todo show success and error message
    await axios
      .delete(`${Base_Url}remove-journal/${journalID}`)
      .then(res => getAllNotesForUser())
      .catch(err => console.log(err, 'error in deletion'))
  }

  const onEdit = note => {
    setSelectedNote(note)
    setIsEditFormVisible(true)
  }

  const onView = note => {
    setSelectedNote(note)
    setIsModalVisible(true)
  }

  const onModalClose = () => {
    setIsModalVisible(false)
    setSelectedNote(null)
  }

  const onFormClose = () => {}

  const getAllNotesForUser = async () => {
    const userId = user?.id
    const res = await axios(`${Base_Url}get-user-journal/${userId}`)
    setNotes(res.data)
  }

  useEffect(() => {
    if (!isAddFormVisible || !isEditFormVisible) {
      getAllNotesForUser()
    }
  }, [isAddFormVisible, isEditFormVisible])

  const randomUrl = 'https://images.pexels.com/photos/236111/pexels-photo-236111.jpeg?auto=compress&cs=tinysrgb&w=600'
  return (
    <div className='flex flex-col w-full items-start'>
      <div className='flex justify-end w-full'>
        <div
          onClick={() => setIsAddFormVisible(true)}
          className='bg-blue-500 cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
        >
          Add Note
        </div>
      </div>
      <div className='fixed bottom-[100px]  right-[60px]'>
        <p className='text-sm'>Total Notes : {notes.length} </p>
      </div>
      {notes.length > 0 ? (
        <div className='mt-4 flex flex-wrap gap-2'>
          {notes.map((note, index) => (
            <NoteCard
              key={note?.journalID}
              note={note}
              onDelete={onDelete}
              onEdit={onEdit}
              onView={onView}
              randomUrl={randomUrl}
            />
          ))}
        </div>
      ) : (
        <div className='grid place-content-center h-[60vh] w-full text-2xl'>
          No notes found
        </div>
      )}
      <ModalView
        isVisibile={isModalVisible}
        note={selectedNote}
        onModalClose={onModalClose}
        randomUrl={randomUrl}
      />
      <Modal open={isAddFormVisible} onClose={onFormClose}>
        <AddNoteForm
          onAddNote={handleAddNote}
          closeModal={() => setIsAddFormVisible(false)}
        />
      </Modal>

      <Modal open={isEditFormVisible} onClose={onFormClose}>
        <EditNoteForm
          onNoteUpdate={handleUpdateNote}
          closeModal={() => setIsEditFormVisible(false)}
          selectedNote={selectedNote}
        />
      </Modal>
    </div>
  )
}

export default NotesListView
