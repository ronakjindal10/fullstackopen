import React from 'react'

function Part1(props) {
  return(
    <p>{props.part1.name} {props.part1.exercises}</p>
  )
}

function Part2(props) {
  return(
    <p>{props.part2.name} {props.part2.exercises}</p>
  )
}

function Part3(props) {
  return(
    <p>{props.part3.name} {props.part3.exercises}</p>
  )
}

function Content(props) {
  return(
    <div>
      <Part1 part1={props.content.parts[0]} />
      <Part2 part2={props.content.parts[1]} />
      <Part3 part3={props.content.parts[2]} />
    </div>
  )
}

export default Content