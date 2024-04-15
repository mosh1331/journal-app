import React, { useEffect, useState } from 'react';
import AddNoteForm from '../addNoteForm/AddNoteForm';
import NoteCard from '../noteCard/NoteCard';
import ModalView from '../modalView/ModalView';

function NotesListView() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleAddNote = (newNote) => {
    // Add the new note to the existing array of notes
    const noteId = Date.now();
    const noteWithId = { id: noteId, ...newNote };
    setNotes([...notes, noteWithId]);
  };

  const onDelete =()=>{}
  const onEdit =()=>{}
  const onView =(note)=>{
    setSelectedNote(note)
    setIsModalVisible(true)
  }

  const onModalClose =()=>{
    setIsModalVisible(false)
    setSelectedNote(null)
    
  }

  return (
    <div className='flex flex-col w-full items-start'>
      <AddNoteForm onAddNote={handleAddNote} />
      <div className='mt-4 flex flex-wrap gap-2' >
        {notes.map((note, index) => (
         <NoteCard key={index}  note={note} onDelete={onDelete} onEdit={onEdit} onView={onView}/>
        ))}
      </div>
      <ModalView isVisibile={isModalVisible} note={selectedNote} onModalClose={onModalClose}/>
    </div>
  );
}

export default NotesListView;
