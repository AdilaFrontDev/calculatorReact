import { useState } from 'react'
import Card from './components/calcCard/Card'
import './components/styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card />
    </>
  )
}

export default App
