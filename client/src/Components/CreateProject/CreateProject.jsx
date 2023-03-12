import React from 'react'
import './createproject.css'
import MultipleSelectChip from '../MultipleSelect/MultiSelect'

export default function CreateProject () {
  const [project, setProject] = React.useState({
    title: '',
    field: '',
    summary: '',
    members: '',
    image: '',
    university: ''
  })

  const fields = [
    'Aerodynamics',
    'Mechanics',
    'Electronics',
    'Robotics',
    'Software',
    'Aerospace',
    'Science'
  ]
  const [members, setMembers] = React.useState([])

  // const fetchMembers = async () => {
  //   const response = await fetch('http://localhost:8080/api/student')
  //   const data = await response.json()
  //   setMembers(data)
  // }

  const handleChange = e => {
    setProject({ ...project, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const response = await fetch('http://localhost:8080/api/project', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(project)
    })
    const data = await response.json()
    console.log('data: ', data)
  }

  return (
    <div className='create-project'>
      <form id='project' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='projectTitle'>Project Title</label>
          <input
            name='title'
            type='text'
            className='form-control'
            id='projectTitle'
            placeholder='Project Title'
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='projectName'>Project Field</label>
          <select
            name='field'
            id='pet-select'
            form='project'
            onChange={handleChange}
          >
            <option value=''>--Please choose an option--</option>
            {fields.map((field, indx) => (
              <option key={indx} value={field}>
                {field}
              </option>
            ))}
          </select>
        </div>
        <div className='form-group'>
          <label htmlFor='projectDescription'>Project Description</label>
          <textarea
            rows={10}
            cols={50}
            name='summary'
            typeof='text'
            className='form-control'
            id='projectDescription'
            placeholder='Summary of Project'
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='projectImage'>Project Image</label>
          <input
            name='image'
            type='file'
            accept='image/png, image/jpg, image/jpeg'
            className='form-control'
            id='projectImage'
            placeholder='Project Image'
            onChange={handleChange}
          />
        </div>

        <div className='form-group team-select-container'>
          <label htmlFor='projectTeam'>Project Team</label>
          <select
            name='members'
            id='members'
            form='project'
            onChange={handleChange}
            multiple
          >
            <option value='1'>Jay</option>
            <option value='2'>Shubham</option>
            <option value='3'>Kirti</option>
            <option value='4'>Rashi</option>
            <option value='5'>Rishi</option>
          </select>
        </div>
        <div className='form-group'>
          <label htmlFor='projectTeam'>University Name</label>
          <input
            name='university'
            type='text'
            className='form-control'
            id='projectTeam'
            placeholder='Project Team'
            onChange={handleChange}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  )
}
