import React from 'react'
import { Link } from 'react-router-dom'
import './sidelink.css'

export default function SideLink ({ icon, name, link }) {
  return (
    <div className='link'>
      <Link className='link-item' to={link}>
        <div className='link-container'>
          <div className='link-title'>
            <span className='link_name'>{name}</span>
          </div>
        </div>
      </Link>
    </div>
  )
}
