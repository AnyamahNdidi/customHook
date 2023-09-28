import React from 'react'
import classes from "./Task.module.css"
import TaskItem from './TaskItem'

import Section from '../UI/Section'

const Task = (props) => {
  let tasklist = <h2>No task foundm. start adding some!</h2>
  
  if (props.item.length > 0)
  {
      tasklist = ( <ul>
      {
        props.item.map((props) => (
          <TaskItem key={props._id}>{props.text}</TaskItem>
        ))
      }
    </ul>
        )
  }
  let content = tasklist
  
  if (props.error)
  {
    content = <button onClick={props.onFetch}>try again</button>
  }

  if (props.loading)
  {
    content = "loading task....."
  }
  return (
    <Section>
      <div className={classes.container}>{content }</div>
    </Section>
  )
}

export default Task