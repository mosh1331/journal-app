import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import * as Bytescale from "@bytescale/sdk";
import dayjs from "dayjs";

function AddNoteForm({ onAddNote, closeModal }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [mediaFileUrl, setMediaFileUrl] = useState('');
    const [fileUploading, setfileUploading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Check if title and content are not empty
        if (!title.trim() || !content.trim()) return;

        let date = dayjs().format('HH:MM a DD MMM YY')
        // Call the onAddNote function passed from the parent component
        onAddNote({ title, content, mediaFileUrl, date });
        // Clear the input fields after adding the note
        setTitle('');
        setContent('');
        setMediaFileUrl('')
    };

    const onClose = () => {
        setTitle('');
        setContent('');
        closeModal()
    }

    const uploadManager = new Bytescale.UploadManager({
        apiKey: "public_kW15c2o92uo41RtyKGShm56B3gWj" // This is your API key.
    });

    const onFileSelected = async event => {
        //todo put loader
        setfileUploading(true)
        const file = event.target.files[0];
        try {
            const { fileUrl, filePath } = await uploadManager.upload({ data: file });
            setMediaFileUrl(fileUrl)
            setfileUploading(false)
        } catch (e) {
            setfileUploading(false)
            alert(`Error:\n${e.message}`);
        }
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
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline min-h-[40vh]"
                ></textarea>
            </div>
             <input accept="image/jpeg, image/png" type="file" onChange={(event) => onFileSelected(event)} />
            {fileUploading ? <p className="text-sm font-Roboto">
                Uploading....
            </p>:null}
            <div className='mt-4'>
                <button disabled={fileUploading} type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Add Note
                </button>
                <button onClick={onClose} className="bg-[tomato] ml-2 hover:bg-[#db5959] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Cancel
                </button>
            </div>

        </form>
    );
}

export default AddNoteForm;
