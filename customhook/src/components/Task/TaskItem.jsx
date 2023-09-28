import React from 'react'
import classes from "./Taskitem.module.css"

const TaskItem = (props) => {

     return <li className={classes.task}>{props.children}</li>
 
}

export default TaskItem