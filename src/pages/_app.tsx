
import { Outlet } from '@tanstack/react-router'
import { useState } from 'react'
import "src/index.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <a>header</a>
      <br />
      <Outlet />
    </>
  )
}

export default App
