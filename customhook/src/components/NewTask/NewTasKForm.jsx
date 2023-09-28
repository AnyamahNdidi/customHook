import React from 'react'
import classes from "./newtask.module.css"

const NewTasKForm = (props) => {

    let taskInputRef = React.useRef("")
    const submitHandler = (e) => {
        
        e.preventDefault()
        let getValue = taskInputRef.current.value

        if (getValue.trim().length > 0)
        {
            props.getDataHandler(getValue)
        }

    }
  return (
     <form className={classes.form} onSubmit={submitHandler}>
      <input type='text' ref={taskInputRef} />
      <button>{props.loading ? 'Sending...' : 'Add Task'}</button>
    </form>
  )
}

export default NewTasKForm