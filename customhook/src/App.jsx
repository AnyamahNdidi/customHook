
import React from "react"
import './App.css'
import BackwardCounter from './components/BackwardCounter'
import ForwardCounter from './components/ForwardCounter'
import NetTask from './components/NewTask/NetTask'
import Task from "./components/Task/Task"
import useHttp from "./components/Hooks/use-http"

function App() {
 
  const [task, setTask] = React.useState([])


 
  console.log("njk", task)

  //  sentRequest:fetchTasks this is just renaming the sendRequest to fetchTasks

  const {isLoading, error, sentRequest:fetchTasks } = useHttp()

 

  React.useEffect(() => {
     const transformUserData = (objTask) => {
      const loaadeddata = []
      for (const taskKey in objTask)
      {
        console.log("task key 00", objTask[taskKey])
        loaadeddata.push(
          {
            _id: taskKey, text: objTask[taskKey],

          }
        )
      }
    
    setTask(loaadeddata)
    
  }
    fetchTasks({url:"https://reqestsend-default-rtdb.firebaseio.com/task.json"}, transformUserData)
  },[fetchTasks])
 
  
  const taskAddHandler = (task) => {
    setTask((prevTasks) => [...prevTasks, task]);
  };
  return (
    <>
   
      <NetTask onAddTask={taskAddHandler} />
      <Task
        item={task}
        error={error}
        loading={isLoading}
        onFetch={fetchTasks}
      />
    
    </>
  )
}

export default App


  //  <BackwardCounter />
  //   <ForwardCounter />
