import React from 'react';
import Section from '../UI/Section'
import NewTasKForm from './NewTasKForm'
import useHttp from '../Hooks/use-http';


const NetTask = (props) => {
  const { isLoading, error, sentRequest: sendTaskRequest } = useHttp()

  const creatTask = (dataText, taskData) => {
    const generateId = taskData.name // firebase name is id thats taskData.name is point to id
    const createdTask = { id: generateId, text: dataText }
    props.onAddTask(createdTask)
  }


  const getDataHandler = React.useCallback(async (value) => {
      
    sendTaskRequest({
      url: "https://reqestsend-default-rtdb.firebaseio.com/task.json",
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body:value
    },
    
      creatTask.bind(null , value)
    
    )
 
        // try
        // {
        //   const response = await  fetch("https://reqestsend-default-rtdb.firebaseio.com/task.json",
        //     {
        //         method: "POST",
        //         body: JSON.stringify(value),
        //         headers: {
        //              'Content-Type': 'application/json',
        //         }
                
        //       })
        //       if (!response.ok) {
        //             throw new Error('Request failed!');
        //     }
        //     const data = await response.json()
        //     console.log("show mk i see", data.name)
        //     const createdTask = {id: data.name}
        //     props.onAddTask(createdTask)


        // } catch (error)
        // {
        //     setError(error.message || 'Something went wrong!');
        // }
     
       
    })
    
  return (
      <Section>
          <NewTasKForm getDataHandler={getDataHandler} loading={isLoading} />
      </Section>
  )
}

export default NetTask