import './navbar.css'
import { Link } from 'react-router-dom'
import Avatar from '../Avatar/Avatar'
// import CurrUser = require("../../Utils/CurrUser");

export default function Navbar () {
  return (
    <div className='navbar'>
      <div className='navbar-flex-container'>
        <div className='navbar-flex-item brand'>
          <h3>All_Pro</h3>
        </div>
        <div className='navbar-flex-item link'>
          <div className='navbar-flex-item auth'>
            {false ? (
              {
                /* <Avatar 
                        src={CurrUser.avatar}
                        alt={CurrUser.name}
                        name={CurrUser.name}
                    /> */
              }
            ) : (
              <Link to='/user'>
                <button className='auth-button'>Sign In</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
