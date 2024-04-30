import { useState } from 'react'
import './App.css'
import InputField from './Components/InputField'
import ShowTodos from './Components/ShowTodos'
import { RecoilRoot } from 'recoil'
import Home from './Pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <RecoilRoot>
     <Home/>
     </RecoilRoot>
    </>
  )
}

export default App
