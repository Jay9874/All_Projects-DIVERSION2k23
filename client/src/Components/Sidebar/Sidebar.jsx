import './sidebar.css'
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
