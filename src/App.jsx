import { useState } from 'react'
import Card from './components/calculatorCard/Card'
import './components/styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='calculator'>
      <Card />
    </div>
  )
}

export default App
