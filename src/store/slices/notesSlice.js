import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import { addDoc, collection,getDocs,deleteDoc,doc } from "firebase/firestore";
import {db} from '../../config/config'




export const deleteNote = createAsyncThunk(
    'notes/deleteNotes',
    async(id) => {
        console.log(id)
        try{
            const docRef = doc(db,'notes',id);
            await deleteDoc(docRef)
            
            return id;
        }
        catch(error){
            console.log(error)
        }
        
    },
)
 
export const addNote = createAsyncThunk(
    'notes/addNotes',
    async(note) => {
        console.log(note)
        try{
           const collectionRef = collection(db,'notes');
           const response = await addDoc(collectionRef, note);
           return response;
        }
        catch(error){
           console.log(error)
        }
        
    },
)
export const getNotes = createAsyncThunk(
    'notes/getNotes',
    async() => {
        try{
            const collectionRef =  collection(db,'notes');
            const docs = await  getDocs(collectionRef);
            console.log(docs,'docs')
            let data = [];
            docs.forEach((doc) => {
                data.push({id:doc.id, ...doc.data()});
            });
            return data;
        }
        catch(error){
            console.log(error)
        }
        
    },
)



const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        notes: [],
        
    },
    reducers: {
        
    },
     extraReducers: (builder)=>{
        builder.addCase(addNote.fulfilled,(state,action)=>{
            console.log('Notes added successfully',action.payload)
            state.notes = [action.payload,...state.notes]
        })
        builder.addCase(getNotes.fulfilled,(state,action)=>{
            console.log('Notes fetched successfully',action.payload)
            state.notes = action.payload
        })
        builder.addCase(deleteNote.fulfilled,(state,action)=>{
            console.log('Notes deleted successfully',action.payload)
            state.notes = state.notes.filter(note=>note.id!==action.payload)
        })

    }
    
})


export const {} = notesSlice.actions
export default notesSlice.reducer