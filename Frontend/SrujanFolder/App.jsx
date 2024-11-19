import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'

function App() {
  return (
    <div className='mx-auto max-w-screen-lg'>
      <Header/>
      <div className='min-h-[calc(100vh-136px)]'>
     <Outlet/>
      </div>
     <Footer/>
    </div>
  )
}

export default App
