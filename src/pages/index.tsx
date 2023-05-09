import { useState } from 'react'
import { Button } from "@/components/ui/Button"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <a>This is Index</a>
      <Button variant="default" size="default" onClick={() => setCount(count + 1)}>{count}</Button>
    </div>
  )
}

export default App
