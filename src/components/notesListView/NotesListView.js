import React, { useEffect, useState } from 'react'
import AddNoteForm from '../addNoteForm/AddNoteForm'
import NoteCard from '../noteCard/NoteCard'
import ModalView from '../modalView/ModalView'
import { Modal } from '@mui/material'

function NotesListView() {
    const [notes, setNotes] = useState([])
    const [selectedNote, setSelectedNote] = useState()
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [isFormVisible, setIsFormVisible] = useState(false)

    const handleAddNote = newNote => {
        // Add the new note to the existing array of notes
        const noteId = Date.now()
        const noteWithId = { id: noteId, ...newNote }
        setNotes([...notes, noteWithId])
        setIsFormVisible(false)
    }

    const onDelete = () => { }
    const onEdit = () => { }
    const onView = note => {
        setSelectedNote(note)
        setIsModalVisible(true)
    }

    const onModalClose = () => {
        setIsModalVisible(false)
        setSelectedNote(null)
    }

    const onFormClose = () => { }

    return (
        <div className='flex flex-col w-full items-start'>
            <div className="flex justify-end w-full">
                <div onClick={() => setIsFormVisible(true)} className="bg-blue-500 cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Add Note
                </div>
            </div>
            <div className="fixed bottom-[100px]  right-[60px]">
                <p className="text-sm">Total Notes : {notes.length} </p>
            </div>
          {notes.length > 0 ?   <div className='mt-4 flex flex-wrap gap-2'>
                {notes.map((note, index) => (
                    <NoteCard
                        key={index}
                        note={note}
                        onDelete={onDelete}
                        onEdit={onEdit}
                        onView={onView}
                    />
                ))}
            </div>: <div className='grid place-content-center h-[60vh] w-full text-2xl'>
                No notes found
                </div>}
            <ModalView
                isVisibile={isModalVisible}
                note={selectedNote}
                onModalClose={onModalClose}
            />
            <Modal open={isFormVisible} onClose={onFormClose}>
                <AddNoteForm onAddNote={handleAddNote} closeModal={() => setIsFormVisible(false)} />
            </Modal>
        </div>
    )
}

export default NotesListView
