import './sidebar.css'
import SideLink from '../SidebarLink/SideLink'

export default function Sidebar ({ changeView, sideLinks }) {
  function creatLink (props, indx) {
    return <SideLink key={indx} onChange={changeView} props={props} />
  }

  return (
    <div className='sidebar-flex-container'>{sideLinks.map(creatLink)}</div>
  )
}
