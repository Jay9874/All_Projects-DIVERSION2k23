import { Routes, Route } from 'react-router-dom'
import NormalAuth from './Pages/Authentication/NormalAuth'
import Dashboard from './Pages/Dashboard/Dashboard'
import Admin from './Pages/Admin/Admin'
import { useState } from 'react'
import Protected from './utils/Protected'

function App () {
  const [loggedUserId, setLoggedUserId] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loggedUser, setLoggedUser] = useState({})

  function handleUser (user) {
    setLoggedUserId(user.userId)
    if(user.userType !== '')
    setIsLoggedIn(true)
    setLoggedUser(user)
  }

  return (
    <Routes>
      <Route
        exact
        path=''
        element={<Dashboard loggedUserId={loggedUserId} handleUser={handleUser} />}
      />
      <Route
        exact
        path='/admin'
        element={
          <Protected isLoggedIn={isLoggedIn}>
            <Admin loggedUserId={loggedUserId} loggedUser={loggedUser} />
          </Protected>
        }
      />
      <Route path='/login' element={<NormalAuth handleUser={handleUser}/>} />
    </Routes>
  )
}

export default App
