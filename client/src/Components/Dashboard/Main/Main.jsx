import React from 'react'
import './main.css'
import Card from '../Card/Card'
import data from '../Card/data'

export default function Main () {
  return (
    <div className='dash-proj-container'>
      <div className='proj-container'>
        {data.map(data => {
          return (
            <div className='proj-item'>
              <Card 
                title={data.title}
                image={data.image}
                description={data.description}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
