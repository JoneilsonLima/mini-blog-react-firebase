import { Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div>
      <h1>MiniBlog</h1>
      <Outlet/>
    </div>
  )
}

export default App
