import React from 'react'
import { LuPlus } from "react-icons/lu";
import {useNavigate} from 'react-router-dom'

export default function Home(){
    const navigate = useNavigate()
    const addNoteHandle = () => {
          navigate('/note-editor')
    };
    let styles = {
        display:'flex',
        justifyContent:'center',
    }
    return (
        <>
       <div style={styles}>
        <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" onClick={addNoteHandle}> <LuPlus size={30}/> </button>
        </div>
        <h2 style={{textAlign:'center',fontSize:'1.5rem',fontWeight:'500'}}>Add Note</h2>
        </>
    )
}