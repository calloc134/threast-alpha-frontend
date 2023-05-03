import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <a>{count}</a>
  )
}

export default App
