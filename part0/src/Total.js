import React from 'react'

function Total(props) {
  return(
    <p>Number of excercises {props.exercises.exercises1 + props.exercises.exercises2 + props.exercises.exercises3}</p>
  )
}

export default Total