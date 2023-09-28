import React from "react";




const useHttp = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);



  const sentRequest = React.useCallback( async (requestConfig,mainData) => {
    setIsLoading(true)
    setError(null)
      try
      {
          const response = await fetch(
              requestConfig.url,
              {
                  method: requestConfig.method ? requestConfig.method : 'GET',
                  headers: requestConfig.headers ? requestConfig.headers : {},
                  body:requestConfig.body ? JSON.stringify(requestConfig.body) : null
        }
      )
      if (!response.ok)
      {
        throw new Error("request failed")
      }
      const data = await response.json()
     
      mainData(data)
    //   console.log("data we are mapping", task)
      
    } catch (error)
    {
      setError("error has occores", error.message) 
    }
    setIsLoading(false);
    
    },[ ])
    
    return {
        isLoading: isLoading,
        error: error,
        sentRequest: sentRequest,
    }
    
}

export default useHttp