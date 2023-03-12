import './dashboard.css'
import { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Main from './Main/Main'

export default function Dashboard ({loggedUser}) {
  const [view, setView] = useState('allProject');
  console.log("hello world")
  function changeView({name}){
    setView(name);
  }

  const sidebarLinks = [
      {
        name: 'All Projects',
        url: '/all',
        icon: 'flight'
      },
      {
        name: 'AeroDynamics',
        url: '/aerodynamics',
        icon: 'flight'
      },
      {
        name: 'Mechanics',
        url: '/mechanics',
        icon: 'precision_manufacturing'
      },
      {
        name: 'Electronics',
        url: '/electronics',
        icon: 'precision_manufacturing'
      },
      { name: 'Robotics', url: '/robotics', icon: 'smart_toy' },
      { name: 'Software', url: '/software', icon: 'code' },
      {
        name: 'AeroSpace',
        url: '/aerospace',
        icon: 'rocket_launch'
      },
      { name: 'Science', url: '/science', icon: 'biotech' }
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
              <Sidebar
                sideLinks={sidebarLinks}
              />
            </div>
            <div className='flex-item main-container'>
              <Main 
                onViewChange={changeView}
                view={view}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
