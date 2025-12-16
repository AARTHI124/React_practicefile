import React from 'react'

export default function Props(props) {
  return (
    <div>
       <h1>Name:{props.Name}</h1>
       <h2>Age:{props.Age}</h2>
       <h1>About:{props.About}</h1>
       <button>{props.text}</button>
    </div>
  )
}

