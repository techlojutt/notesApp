import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import { addDoc, collection,getDocs,deleteDoc,doc,updateDoc,onSnapshot } from "firebase/firestore";
import {db} from '../../config/config'

export const updateNote = createAsyncThunk(
    'notes/updateNotes',
    async(note)=>{
         console.log('Updating note',note)
        try {

        const docRef = doc(db,'notes',note.id);
        await updateDoc(docRef,note);
        return note;
        }
        catch(error){
            console.log(error)
        }

    }

)


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
            
        const collectionRef = collection(db,'notes');
        const docs = await  getDocs(collectionRef);
        let data = []
        docs.forEach(doc => {
            data.push({id: doc.id,  ...doc.data()});
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
        docId: null,
        
    },
    reducers: {
        updateDocId:(state,action) => {
              let updateNote = state.notes.find(note => note.id === action.payload);
              state.docId = updateNote;
    
        },
        resetDocId:(state) => {
              state.docId = null
        },
        
    },
     extraReducers: (builder)=>{
        builder.addCase(addNote.fulfilled,(state,action)=>{
            state.notes = [action.payload,...state.notes]
        })
        builder.addCase(getNotes.fulfilled,(state,action)=>{
            state.notes = action.payload
        })
        builder.addCase(deleteNote.fulfilled,(state,action)=>{
            state.notes = state.notes.filter(note=>note.id!==action.payload)
        })
        builder.addCase(updateNote.fulfilled,(state,action)=>{
            state.notes = state.notes.map(note=>note.id === action.payload.id? action.payload : note)
        })

    }
    
})


export const {updateDocId,resetDocId} = notesSlice.actions
export default notesSlice.reducer