import './sidebar.css'
// import DiversionLogo from '../../../assets/diversion.png'
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom'

export default function Sidebar () {
  const query1080px = useMediaQuery({
    query: '(max-width: 1080px)'
  })

  return (
    <div className={`sidebar ${query1080px && 'close'}`}>
      <div className='logo-details'>
        {/* <img src={DiversionLogo} className='div_logo' /> */}
        <span className='logo_name'>ALL PRO</span>
      </div>
      <ul className='nav-links'>
        <li>
          <Link to="/">
            <i className='bx bx-grid-alt'></i>
            <span className='link_name'>Dashboard</span>
          </Link>
          <ul className='sub-menu blank'>
            <li>
              <Link className='link_name' to="/">
                Category
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <div className='iocn-link'>
            <Link to="/">
              <i className='bx bx-collection'></i>
              <span className='link_name'>Category</span>
            </Link>
          </div>
        </li>
        <li>
          <div className='iocn-link'>
            <Link to="/">
              <i className='bx bx-book-alt'></i>
              <span className='link_name'>Posts</span>
            </Link>
          </div>
        </li>
        <li>
          <Link to="/">
            <i className='bx bx-pie-chart-alt-2'></i>
            <span className='link_name'>Analytics</span>
          </Link>
          <ul className='sub-menu blank'>
            <li>
              <Link className='link_name' to="/">
                Analytics
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/">
            <i className='bx bx-line-chart'></i>
            <span className='link_name'>Chart</span>
          </Link>
          <ul className='sub-menu blank'>
            <li>
              <Link className='link_name' to="/">
                Chart
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <div className='iocn-link'>
            <Link to="/">
              <i className='bx bx-plug'></i>
              <span className='link_name'>Plugins</span>
            </Link>
          </div>
        </li>
        <li>
          <Link to="/">
            <i className='bx bx-compass'></i>
            <span className='link_name'>Explore</span>
          </Link>
          <ul className='sub-menu blank'>
            <li>
              <Link className='link_name' to="/">
                Explore
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/">
            <i className='bx bx-history'></i>
            <span className='link_name'>History</span>
          </Link>
          <ul className='sub-menu blank'>
            <li>
              <Link className='link_name' to="/">
                History
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/">
            <i className='bx bx-cog'></i>
            <span className='link_name'>Setting</span>
          </Link>
          <ul className='sub-menu blank'>
            <li>
              <Link className='link_name' to="/">
                Setting
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}
