import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';
import {auth,db} from '../../config/config';
import {doc,getDoc,setDoc} from 'firebase/firestore';



export const signInUser = createAsyncThunk(
    'authUser/signInUser',
    async(userData)=>{
        try {

        const userCredential =  await signInWithEmailAndPassword(auth, userData.email, userData.password)
        const user = userCredential.user;
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        const dbUser = docSnap?.data();
        console.log(dbUser,'db user data');
        return dbUser;
            
        } catch (error) {
            console.error(error);
        }

        
    }
)


export const signUpUser = createAsyncThunk(
    'authUser/signUpUser',
    async(userData)=>{

        try {


            const userCredential =  await  createUserWithEmailAndPassword(auth,userData.email, userData.password);
            const user = userCredential.user;
            let saveUserTodb = {
                name:userData.name,
                email:userData.email,
            }
            await setDoc(doc(db,'users',user.uid),saveUserTodb);
           
             return saveUserTodb;
            
            
        } catch (error) {

            console.log(error);
            
            
        }
        

    })

const authSlice = createSlice({

     name : 'authUser',
     initialState:{
         user: null,
     },

     reducers:{
         setUser:(state,action) => {
             state.user = action.payload
         },
         

},
 extraReducers:(builder)=>{
    builder.addCase(signUpUser.fulfilled,(state,action)=>{
          console.log(action,'action paylaoded');
          state.user = action.payload;
    })
    builder.addCase(signInUser.fulfilled,(state,action)=>{
          console.log(action,'action paylaoded');
          state.user = action.payload;
    })

 }
}    
)



export const {setUser} = authSlice.actions;
export default authSlice.reducer;