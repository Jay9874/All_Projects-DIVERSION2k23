import './dashboard.css'
import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'
import Main from './Main/Main'

export default function Dashboard () {


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
              <Main />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
