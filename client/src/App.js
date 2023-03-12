import { Routes, Route } from 'react-router-dom'
import NormalAuth from './Pages/Authentication/NormalAuth'
import Dashboard from './Pages/Dashboard/Dashboard'
import Admin from './Pages/Admin/Admin'
import { useState } from 'react'
// import CreateProject from './Pages/Admin/CreateProject/CreateProject'

function App () {
  const [loggedUser, setLoggedUser] = useState({})
  const  handleUser = (currUser) => {
    console.log(currUser)
    setLoggedUser(currUser)
  }
  return (
    <Routes>
      <Route path='/login' element={<NormalAuth 
          handleUser = {handleUser}
      />} />
      <Route exact path='/dashboard' element={
      <Dashboard 
        loggedUser = {loggedUser}
      />
      } />
      <Route exact path='/admin' element={<Admin 
        loggedUser = {loggedUser}
      />} />
    </Routes>
  )
}

export default App
