import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

function AddNoteForm({ onAddNote, closeModal }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Check if title and content are not empty
        if (!title.trim() || !content.trim()) return;
        // Call the onAddNote function passed from the parent component
        onAddNote({ title, content });
        // Clear the input fields after adding the note
        setTitle('');
        setContent('');
    };

    const onClose=()=>{
        setTitle('');
        setContent('');
        closeModal()
    }
    return (
        <form onSubmit={handleSubmit} className="p-12 rounded bg-white mx-auto w-1/2 h-[80%] mt-12 relative ">
            <div onClick={onClose} className="h-6 w-6 absolute top-[10px] right-[10px] cursor-pointer">
                <CloseIcon />
            </div>
            <div className="mb-4">
                <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Title:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="content" className="block text-gray-700 font-bold mb-2">Content:</label>
                <textarea
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline min-h-[50vh]"
                ></textarea>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Add Note
            </button>
            <button onClick={onClose} className="bg-[tomato] ml-2 hover:bg-[#db5959] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Cancel
            </button>
        </form>
    );
}

export default AddNoteForm;
