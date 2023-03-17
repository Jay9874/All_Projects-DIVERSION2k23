import { React, useEffect, useState } from 'react'
import axios from 'axios'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import Main from '../Admin/Main/Main'
import './admin.css'
import { adminSidebarLinks } from '../../data'

export default function AdminHome ({ loggedUser }) {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [view, setView] = useState('addProject')

  function changeView (currView) {
    setView(currView)
    setLoading(true)
  }

  useEffect(() => {
    const fetchProjects = async view => {
      setLoading(true)
      if (view === 'thisUni') {
        const res = await axios.get(`/api/uniproject/${loggedUser.adminAt}`)
        setProjects(res.data)
      }else{
        const res = await axios.get(`/api/project/all`)
        setProjects(res.data)
      }
      setLoading(false)
    }
    if (view === 'all' || view === 'thisUni') {
      fetchProjects(view)
    }
  }, [view, loggedUser])

  return (
    <div className='dashboard'>
      <div className='dashboard__container'>
        <section className='nav-section'>
          <Navbar />
        </section>
        <section className='main-section'>
          <div className='main-flex-container'>
            <div className='flex-item sidebar-container'>
              <Sidebar changeView={changeView} sideLinks={adminSidebarLinks} />
            </div>
            <div className='flex-item main-container admin-main'>
              <Main view={view} loggedUser={loggedUser} projects={projects}  loading={loading}/>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
