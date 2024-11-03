import React,{useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './noteEditor.css';
import { useDispatch } from 'react-redux';
import { addNote } from '../../store/slices/notesSlice';


export default function NoteEditor () {
    const dispatch = useDispatch()
     const [title,setTitle] = useState('');
     const [content,setContent] = useState('')

    const handleAddNoteClick =()=>{
        let note = {
            title,
            content,
            createAt: new Date(),
        }
        console.log(note)
        dispatch(addNote(note))
        
    };


    let styles = {
            width: '90%',
            margin: '0 auto',
            padding: '20px',
            boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
            borderRadius: '7px',
            backgroundColor: '#f2f2f2',
            fontFamily: 'Arial, sans-serif',
            height:'100vh',
           
        }
    
  return (

    <div style={styles}>
      <input style={{width:'100%',margin:'20px auto',height:'5vh',border:'1px solid #CCCCCC',outline:'none'}} value={title} type="text" placeholder='Write your note title here...' onChange={(e)=>setTitle(e.target.value)} />
      <ReactQuill  value={content} onChange={setContent} theme="snow" placeholder="Write your note here..." />
      <div className='button-container'>
      <button  type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={handleAddNoteClick}>Add Note</button>
      </div>
    </div>
  )
}