import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Total from './Total'
import Content from './Content'

function App() {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content content={{part1, part2, part3, exercises1, exercises2, exercises3}}/>
      <Total exercises={{exercises1, exercises2, exercises3}}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))