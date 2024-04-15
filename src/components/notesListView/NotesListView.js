import React, { useEffect, useState } from 'react';
import AddNoteForm from '../addNoteForm/AddNoteForm';
import NoteCard from '../noteCard/NoteCard';

function NotesListView() {
  const [notes, setNotes] = useState([]);

  const handleAddNote = (newNote) => {
    // Add the new note to the existing array of notes
    const user = 1
    setNotes([...notes, newNote]);
  };

  const onDelete =()=>{}
  const onEdit =()=>{}
  const onView =()=>{}

  return (
    <div className='flex flex-col w-full items-start'>
      <AddNoteForm onAddNote={handleAddNote} />
      <div className='mt-4 flex flex-wrap gap-2' >
        {notes.map((note, index) => (
         <NoteCard key={index}  note={note} onDelete={onDelete} onEdit={onEdit} onView={onView}/>
        ))}
      </div>
    </div>
  );
}

export default NotesListView;
