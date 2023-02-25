import React from 'react'

export default function Avatar({src, alt, name}) {
  return (
    <div>
        <img 
            src={src}
            alt={alt}
            title={name}
        />
    </div>
  )
}
