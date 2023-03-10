import { useState } from 'react'
import './App.css'
import Box from "./Box"
import BoxContainer from './BoxContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BoxContainer />
    </div>
  )
}

export default App
