import React from 'react'
import { NavLink } from 'react-router-dom'
import './sidelink.css'

export default function SideLink ({ onChange, props: { name, view } }) {
  return (
    <div className='link' onClick={() => onChange(view)}>
      <NavLink className='link-item'>
        <div className='link-container'>
          <div className='link-title'>
            <span className='link_name'>{name}</span>
          </div>
        </div>
      </NavLink>
    </div>
  )
}
