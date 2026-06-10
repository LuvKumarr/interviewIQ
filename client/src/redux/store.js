import { configureStore } from '@reduxjs/toolkit'
import userSlice from "./userSlice"

export default configureStore({
  reducer: {
    user:userSlice
    
  },
})

//react redux hooks for component interaction with redux store
//to read the data from store : useSelector 
//to dispatch : useDispatch