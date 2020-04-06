import React from 'react'

function Part1(props) {
  return(
    <p>{props.part1} {props.exercises1}</p>
  )
}

function Part2(props) {
  return(
    <p>{props.part2} {props.exercises2}</p>
  )
}

function Part3(props) {
  return(
    <p>{props.part3} {props.exercises3}</p>
  )
}

function Content(props) {
  return(
    <div>
      <Part1 part1={props.content.part1} exercises1={props.content.exercises1}/>
      <Part2 part2={props.content.part2} exercises2={props.content.exercises2}/>
      <Part3 part3={props.content.part3} exercises3={props.content.exercises3}/>
    </div>
  )
}

export default Content