import './dashboard.css'
import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'
import Main from './Main/Main'

export default function Dashboard () {
  return (
    <div className='dashboard'>
    <div className='dashboard__container'>
      <Navbar />
      <Sidebar />
      <Main />
    </div>
    </div>
  )
}
