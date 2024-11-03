import React ,{useEffect}from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNotes,deleteNote } from '../../store/slices/notesSlice';
import ReactQuill from 'react-quill'; // Import Quill component
import 'react-quill/dist/quill.snow.css'; // Import Quill styles

export default function NotesList(){
    const notes = useSelector(store => store.notesSlice.notes);
    console.log(notes,'notes')
    const dispatch = useDispatch();


    useEffect(() =>{ 
        dispatch(getNotes());
    },[])

    const onClickDelete = (id)=>{
        console.log('id',id)
           dispatch(deleteNote(id))
    }

     return(
        <div className=' grid grid-cols-3 gap-7' style={{margin:'0 1rem'}} >
        
        {
            notes?.map((note)=>{
                return(
                   
                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 " style={{boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',width:'40rem',height:'50vh',}}>
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{note.title}</h5>
                        </a>
                        <div style={{width:'100%',height:'40%',overflow:'hidden'}}>
                        <ReactQuill value={note.content} readOnly={true} theme="bubble" />
                        </div>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-2">
                            Read more
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                        <div style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:'2rem'}}>
                        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" >Edit</button>
                        <button type="button" class="focus:outline-none text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={()=>onClickDelete(note.id)} >Delete</button>
                        </div>
                    </div>
                   
                )
            })
 
        }
       </div>
     )

}