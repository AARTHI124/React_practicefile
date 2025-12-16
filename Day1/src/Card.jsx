import React from 'react'

export default function Card(p) {
  return (
    <div className='card'>
      <h1>Name:{p.Name}</h1>
      <h2>Age:{p.Age}</h2>
      <h2>Register_Number{p.Register_Number}</h2>
      <h2>DOB:{p.DOB}</h2>
      <h2>Opted_Course:{p.Opted_Course}</h2>
    </div>
  )
}
