import { Routes, Route } from 'react-router-dom'
import NormalAuth from './Pages/Authentication/NormalAuth'
import Dashboard from './Pages/Dashboard/Dashboard'
import Admin from './Pages/Admin/Admin'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Protected from './utils/Protected'

function App () {
  const [loggedUser, setLoggedUser] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(null)

  function handleUser (user) {
    setLoggedUser(user.userDetail)
    setIsLoggedIn(user.isLoggedIn)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      axios
        .get('/api/isUserAuth', {
          headers: {
            'x-access-token': localStorage.getItem('token')
          }
        })
        .then(res => {
          setIsLoggedIn(res.isLoggedIn)
        })
        .catch(err => {
          console.log(err.message)
        })
    }
  }, [])


  return (
    <Routes>
      <Route
        exact
        path=''
        element={<Dashboard loggedUser={loggedUser} handleUser={handleUser} />}
      />
      <Route
        exact
        path='/admin'
        element={
          <Protected isLoggedIn={isLoggedIn}>
            <Admin loggedUser={loggedUser} />
          </Protected>
        }
      />
      <Route path='/login' element={<NormalAuth handleUser={handleUser} />} />
    </Routes>
  )
}

export default App
