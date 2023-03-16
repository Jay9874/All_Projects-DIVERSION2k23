import React from 'react'
import './uni.css'
import Projects from '../Projects/Projects'




export default function University () {
  return (
    <div className='university-container'>
      <div className='university-header'>
        <h1>University</h1>
      </div>
      <div className='university-detail-container'>
        <div className='university-detail'>
          <h2>Indian Institute of Technology Madras</h2>
          <p>Chennai, Tamil Nadu</p>
        </div>
      </div>
      <div className='university-projects-container'>
        <div className='university-projects'>
          <h2>Projects</h2>
          <Projects />
        </div>
      </div>
    </div>
  )
}
