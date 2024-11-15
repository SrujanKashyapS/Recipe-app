import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'

function App() {
  return (
    <div className='mx-auto max-w-screen-lg'>
      <Header/>
     <Outlet/>
    </div>
  )
}

export default App
