import { useState } from 'react'
import axios from 'axios'
import './addstu.css'

export default function AddStudent ({ loggedUser }) {
  const [student, setStudent] = useState({
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    studentOf: loggedUser._id,
    studentAt: loggedUser.adminAt
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
    await axios
      .post('/api/student', student)
      .then(res => {
        alert(res.data.message)
      })
      .catch(err => {
        alert(err.response.data.message)
      })
  }

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
              name='firstname'
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
              name='lastname'
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
