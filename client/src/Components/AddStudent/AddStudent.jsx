import React from 'react'

export default function AddStudent () {
  return (
    <div className='addstudent-container'>
      <h1>Add Student</h1>
      <div className='addstudent-form'>
        <form>
          <div className='form-group'>
            <label htmlFor='studentFirstName'>First Name</label>
            <input
              type='text'
              className='form-control'
              id='studentFirstName'
              placeholder='First Name'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='studentLastName'>Last Name</label>
            <input
              type='text'
              className='form-control'
              id='studentLastName'
              placeholder='Last Name'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='studentUsername'>Username</label>
            <input
              type='text'
              className='form-control'
              id='studentUsername'
              placeholder='Username'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='studentEmail'>Email</label>
            <input
              type='email'
              className='form-control'
              id='studentEmail'
              placeholder='Email'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='studentPassword'>Password</label>
            <input
              type='password'
              className='form-control'
              id='studentPassword'
              placeholder='Password'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='studentConfirmPassword'>Confirm Password</label>
            <input
              type='password'
              className='form-control'
              id='studentConfirmPassword'
              placeholder='Confirm Password'
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
