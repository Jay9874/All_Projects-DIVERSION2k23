import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../../../Components/Card/Card'
import CreateProject from '../../../Components/CreateProject/CreateProject'
import AddStudent from '../../../Components/AddStudent/AddStudent'
import University from '../../../Components/University/University'
import Projects from '../../../Components/Projects/Projects'
import './main.css'


export default function Main ({ view, loggedUser}) {

  return (
    <div className='dash-proj-container'>
      <div className='proj-container'>
        {view === 'addProject' ? (
          <CreateProject 
            loggedUser={loggedUser}
          />
        ) : view === 'addStudent' ? (
          <AddStudent 
            loggedUser={loggedUser}
          />
        ) : view === 'thisUni' ? (
          <University 
            loggedUser={loggedUser}
          />
        ) : view === 'allProjects' ? (
          <Projects 
            loggedUser={loggedUser}
          />
        ) : (
          <div>NO VIEW</div>
        )}
      </div>
    </div>
  )
}
