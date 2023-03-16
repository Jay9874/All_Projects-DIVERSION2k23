import React from 'react'
import './projects.css'
import Card from '../Card/Card'

export default function Projects ({ projects, loading }) {
  return (
    <div className='dash-proj-container'>
      {projects.length === 0 ? (
        <div className='loading'>
          <h1>Seems like no projects here :(</h1>
        </div>
      ) : loading ? (
        <div className='loading'>
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className='proj-container'>
          {projects.map((data, index) => {
            return (
              <div className='proj-item' key={index}>
                <Card
                  title={data.title}
                  image={data.image.url}
                  description={data.summary}
                />
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
