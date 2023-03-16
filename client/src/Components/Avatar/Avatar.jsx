import { useState } from 'react'
import './avatar.css'
import { Link } from 'react-router-dom'

export default function Avatar ({ src, alt, name, logout }) {
  const [show, setShow] = useState(false)

  function showDropDown () {
    setShow(!show)
  }

  return (
    <div>
      <div className='avatar' onClick={showDropDown}>
        <img src={src} alt={alt}/>
        <span>{name}</span>
      </div>
      {show && (
        <div className='dropdown'>
          <ul>
            <li>
              <Link to='/dashboard'>Profile</Link>
            </li>
            <li>
              <button onClick={logout}>
                <Link to='/login'>Logout</Link>
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
