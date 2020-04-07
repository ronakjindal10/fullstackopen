import React from 'react'

function Total(props) {
  return(
    <p>Number of excercises {props.exercises.parts[0].exercises + props.exercises.parts[1].exercises + props.exercises.parts[2].exercises}</p>
  )
}

export default Total