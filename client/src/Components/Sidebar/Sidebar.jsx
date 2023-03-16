import './sidebar.css'
// import DiversionLogo from '../../../assets/diversion.png'
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom'
import SideLink from '../SidebarLink/SideLink'




export default function Sidebar ({ changeView, sideLinks}) {

  function creatLink (props, indx) {
    return <SideLink  key={indx} onChange={changeView} props={props} />
  }

  return (
    <div className='sidebar'>
      <div className='sidebar-flex-container'>
        <div className='sidebar-item links'>{sideLinks.map(creatLink)}</div>
      </div>
    </div>
  )
}
