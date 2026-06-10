import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import axios from "axios"

import Home from './pages/Home'
import Auth from './pages/Auth'
import { setUserData } from './redux/userSlice'
import { useDispatch } from 'react-redux'
import InterviewPage from './pages/InterviewPage'
import InterviewReport from './pages/InterviewReport'
import Pricing from './pages/Pricing'
import InterviewHistory from './pages/InterviewHistory'

export const serverUrl = "http://localhost:8000"

function App() {
  const dispatch = useDispatch();
  useEffect(() => {

    const getUser = async () => {

      try {

        const result = await axios.get(
          serverUrl + "/api/user/current-user",
          { withCredentials: true }
        )
        dispatch(setUserData(result.data))
      } catch (error) {
        console.log(error)
        dispatch(setUserData(null))
      }
    }

    getUser()

  }, [dispatch]) //jab jab disptach me data change hoga tab tab useEffect fn dubara chlega

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/auth' element={<Auth />} />
      <Route path='/interview' element={<InterviewPage/>} />

      <Route path='/history' element={<InterviewHistory/>} />
      <Route path='/pricing' element={<Pricing/>} />
      <Route path='/report/:id' element={<InterviewReport/>} />



    </Routes>
  )
}

export default App