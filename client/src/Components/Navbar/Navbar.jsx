import './navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Avatar from '../Avatar/Avatar'
import Button from '@mui/material/Button'

export default function Navbar () {
  const navigate = useNavigate()

  const [user, setUser] = useState({
    firstname: '',
    avatar: '',
    isLoggedIn: false
  })

  function logout () {
    localStorage.removeItem('token')
    setUser({
      firstName: '',
      avatar: '',
      isLoggedIn: false
    })
    navigate('/login')
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      axios
        .get('/api/isUserAuth', {
          headers: {
            'x-access-token': localStorage.getItem('token')
          }
        })
        .then(res => {
          const { isLoggedIn, firstname, avatar } = res.data
          setUser({
            firstname,
            avatar,
            isLoggedIn
          })
        })
        .catch(err => {
          console.log(err.message)
        })
    }
  }, [])

  return (
    <div className='navbar-flex-container'>
      <div className='navbar-flex-item brand'>
        <h3>All_Projects</h3>
      </div>
      <div className='navbar-flex-item link'>
        <div className='navbar-flex-item auth'>
          {user.isLoggedIn ? (
            <Avatar
              src={user.avatar}
              alt='user'
              name={user.firstname}
              logout={logout}
            />
          ) : (
            <Link to='/login'>
              <Button variant='outlined' size='large'>
                Login
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
