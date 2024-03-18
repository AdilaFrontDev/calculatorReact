import { useState } from 'react'
import CalcCard from './components/Calc/CalcCard'
import CalcOpBtn from './components/Calc/CalcOpBtn'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>Bonjour</h1>
      <CalcCard />
      <CalcOpBtn />
    </>
  )
}

export default App
