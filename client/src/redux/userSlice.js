import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        userData: null //pahle userDate null hai //baad me userData se hi data nikalte hai
    },
    reducers:{//to change userData initial state
        setUserData:(state,action)=>{ //kis state ko change krna hai aur konsa action perform krna hai
            state.userData = action.payload //payload mtlb data 
            //action ke data ko userData ke ander dalna hai
        }
    }
})
export const { setUserData } = userSlice.actions
export default userSlice.reducer