import { useEffect, useState } from 'react'
import axios from 'axios'
import './addstu.css'

export default function AddStudent () {
  const [user, setUser] = useState({})
  const [student, setStudent] = useState({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
    studentOf: '',
    studentAt: ''
  })

  function handleChange (e) {
    const { name, value } = e.target
    setStudent(prevStudent => {
      return {
        ...prevStudent,
        [name]: value
      }
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const response = await axios.post(
      'http://localhost:8080/api/student',
      student
    )
    console.log(response)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      axios
        .get('http://localhost:8080/api/isUserAuth', {
          headers: {
            'x-access-token': token
          }
        })
        .then(res => {
          const { isLoggedIn, firstName, avatar } = res.data
        })
        .catch(err => {
          console.log(err.message)
        })
    }
  }, [])

  return (
    <div className='addstudent-container'>
      <h1>Enter Student details below</h1>
      <div className='addstudent-form'>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='studentFirstName'>First Name</label>
            <input
              type='text'
              className='form-control'
              id='studentFirstName'
              name='first_name'
              value={student.firstname}
              placeholder='First Name'
              onChange={handleChange}
              autoComplete='off'
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='studentLastName'>Last Name</label>
            <input
              type='text'
              className='form-control'
              id='studentLastName'
              name='last_name'
              value={student.lastname}
              placeholder='Last Name'
              onChange={handleChange}
              autoComplete='off'
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='studentUsername'>Username</label>
            <input
              type='text'
              className='form-control'
              id='studentUsername'
              name='username'
              value={student.username}
              placeholder='Username'
              onChange={handleChange}
              autoComplete='off'
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='studentEmail'>Email</label>
            <input
              type='email'
              className='form-control'
              id='studentEmail'
              name='email'
              value={student.email}
              placeholder='Email'
              onChange={handleChange}
              autoComplete='off'
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='studentPassword'>Password</label>
            <input
              type='password'
              className='form-control'
              id='studentPassword'
              name='password'
              value={student.password}
              placeholder='Password'
              onChange={handleChange}
              autoComplete='off'
            />
          </div>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
