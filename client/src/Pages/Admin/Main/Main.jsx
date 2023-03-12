import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../../../Components/Card/Card'
import CreateProject from '../../../Components/CreateProject/CreateProject'
import AddStudent from '../../../Components/AddStudent/AddStudent'
import University from '../../../Components/University/University'
import Projects from '../../../Components/Projects/Projects'
import './main.css'


export default function Main ({ view }) {
  const [Data, setData] = useState([])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get(`http://localhost/api/users`)
  //     const newData = await response.json()
  //     setData(newData)
  //   }

  //   fetchData()
  // }, [])

  return (
    <div className='dash-proj-container'>
      <div className='proj-container'>
        {view === 'addProject' ? (
          <CreateProject />
        ) : view === 'addStudent' ? (
          <AddStudent />
        ) : view === 'thisUni' ? (
          <University />
        ) : view === 'allProjects' ? (
          <Projects />
        ) : (
          <div>NO VIEW</div>
        )}
      </div>
    </div>
  )
}
