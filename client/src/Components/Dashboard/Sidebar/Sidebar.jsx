import './sidebar.css'
// import DiversionLogo from '../../../assets/diversion.png'
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom'
import SideLink from '../SidebarLink/SideLink'




export default function Sidebar ({sideLinks}) {
  function creatLink ({ name, url , icon}, indx) {
    return <SideLink key={indx} icon={icon} name={name} link={url} />
  }

  return (
    <div className='sidebar'>
      <div className='sidebar-flex-container'>
        <div className='sidebar-item links'>{sideLinks.map(creatLink)}</div>
      </div>
    </div>
  )
}
