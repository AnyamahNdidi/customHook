
import Card from './Card'
import useCounter from './Hooks/useCounter'

const ForwardCounter = () => {
    let counter = useCounter(true)
  return (
      <Card>{counter }</Card>
  )
  
}

export default ForwardCounter