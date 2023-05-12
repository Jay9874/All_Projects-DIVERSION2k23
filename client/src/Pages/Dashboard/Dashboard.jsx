import './dashboard.css'
import { useState, useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Main from './Main/Main'
import {sidebarLinks} from '../../data'
import axios from 'axios'

export default function Dashboard ({ loggedUser, handleUser }) {
  const [projects, setProjects] = useState([])
  const [view, setView] = useState('all')
  const [loading, setLoading] = useState(true)
  
  function changeView (view) {
    setLoading(true)
    setView(view)
  }

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true)
      const res = await axios.get(`/api/project/${view}`)
      setProjects(res.data)
      setLoading(false)
    }
    fetchProjects()
  }, [view])

  return (
    <div className='dashboard'>
      <div className='dashboard__container'>
        <section className='nav-section'>
          <Navbar loggedUser={loggedUser} handleUser={handleUser} />
        </section>
        <section className='main-section'>
          <div className='main-flex-container'>
            <div className='main-flex-item sidebar-container'>
              <Sidebar changeView={changeView} sideLinks={sidebarLinks} />
            </div>
            <div className='main-flex-item main-container'>
                <Main projects={projects} loading={loading} />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
