import { Routes, Route } from 'react-router-dom'
import NormalAuth from './Components/Authentication/NormalAuth'
import Dashboard from './Components/Dashboard/Dashboard'
import Admin from './Components/Admin/Admin'

function App () {
  return (
    <Routes>
      <Route path='/user' element={<NormalAuth />} />
      <Route exact path='/dashboard' element={<Dashboard />} />
      <Route exact path='/admin' element={<Admin/>} />
    </Routes>
  )
}

export default App
