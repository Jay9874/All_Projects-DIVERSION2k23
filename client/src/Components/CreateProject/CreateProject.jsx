import React, { useEffect, useState } from 'react'
import './createproject.css'
import axios from 'axios'

export default function CreateProject ({ loggedUser }) {
  const [university, setUniversity] = useState({})
  const [members, setMembers] = useState([])
  const [project, setProject] = React.useState({
    title: '',
    field: '',
    summary: '',
    members: [],
    image: '',
    university: university._id
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
  

  useEffect(() => {
    axios
      .get(`/api/admin/${loggedUser.userId}`)
      .then(res => {
        const { admin } = res.data
        setMembers(admin.students)
        setUniversity(admin.adminAt)
        setProject({ ...project, university: admin.adminAt._id })
      })
      .catch(err => console.log(err))
  }, [loggedUser, project])

  const handleChange = e => {
    setProject({ ...project, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    console.log(project)
    e.preventDefault()
    const response = await fetch('/api/project', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(project)
    })
    const data = await response.json()
    alert(data.message)
    setProject({})
  }

  const handleImage = e => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setProject({ ...project, image: reader.result })
    }
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
            onChange={handleImage}
          />
        </div>
        {/* <MultipleSelectChip />   */}
        <div className='form-group team-select-container'>
          <label htmlFor='projectTeam'>Project Team</label>
          <select
            name='members'
            id='members'
            form='project'
            onChange={handleChange}
            multiple
          >
            {members.map((member, indx) => {
              return (
                <option key={indx} value={member._id}>
                  {member.firstname + ' ' + member.lastname}
                </option>
              )
            })}
          </select>
        </div>
        <div className='form-group'>
          <label htmlFor='projectTeam'>University</label>
          <p>{university.uniname}, {university.unicity}</p>
          {/* <input
            name='university'
            type='text'
            className='form-control'
            id='projectTeam'
            placeholder='University Name'
            onChange={handleChange}
          /> */}
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  )
}
