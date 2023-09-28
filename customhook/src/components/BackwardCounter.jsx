
import Card from './Card'
import useCounter  from "./Hooks/useCounter"



const BackwardCounter = () => {
   let counter = useCounter(false)
  return (
      <Card>{counter }</Card>
  )
}

export default BackwardCounter