import { Routes, Route, Navigate } from "react-router-dom"

import Homepage from "../pages/Homepage"
import MyProfile from "../pages/myProfile/MyProfile"
import Profiles from "../pages/Profiles"
import PublicationDetails from "../pages/PublicationDetails"
import Login from "../pages/Login"
import Signin from "../pages/Signin"

function FindyRoutes() {

  return (
   
      <Routes>
        <Route path='/' element={<Homepage />}  />
        <Route path="/*" element={ <Navigate to="/" /> } />
        <Route path='/my-profile' element={ <MyProfile />} />
        <Route path='/profiles' element={ <Profiles />} />
        <Route path='/publication-details' element={ <PublicationDetails />} />
        <Route path='/login' element={ <Login />} />
        <Route path='/sing-in' element={ <Signin />} />
      </Routes>

  )
}

export default FindyRoutes
