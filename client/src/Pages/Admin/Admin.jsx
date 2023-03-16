import { React, useEffect, useState } from 'react'
import axios from 'axios'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import Main from '../Admin/Main/Main'

export default function AdminHome ({ loggedUser }) {
  const [view, setView] = useState('addProject')

  function changeView (currView) {
    setView(currView)
  }

  const sidebarLinks = [
    {
      name: 'Add Project',
      url: '/admin/newproject',
      icon: 'flight',
      view: 'addProject'
    },
    {
      name: 'Add Student',
      url: '/admin/newstudent',
      icon: 'flight',
      view: 'addStudent'
    },
    {
      name: 'This University',
      url: '/admin/youruniversity',
      icon: 'flight',
      view: 'thisUni'
    },
    {
      name: 'All Projects',
      url: '/admin/all',
      icon: 'flight',
      view: 'allProjects'
    }
  ]

  return (
    <div className='dashboard'>
      <div className='dashboard__container'>
        <section className='nav-section'>
          <Navbar />
        </section>
        <section className='main-section'>
          <div className='main-flex-container'>
            <div className='flex-item sidebar-container'>
              <Sidebar onChange={changeView} sideLinks={sidebarLinks} />
            </div>
            <div className='flex-item main-container admin-main'>
              <Main view={view} loggedUser={loggedUser} />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
