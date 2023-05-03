import { Link } from '@tanstack/react-location'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Link to={"/app"}>
      リンクです
    </Link>
  )
}

export default App
