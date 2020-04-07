import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Total from './Total'
import Content from './Content'

function App() {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course}/>
      <Content content={course}/>
      <Total exercises={course}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))