import './App.css'
import { Navbar } from './components'

function App() {

  return (
  <div className='bg-black h-screen w-screen px-2 py-3 md:px-15 md:py-5 lg:px-20 lg:py-5'>
     <div className='text-white'>
        <Navbar/>
      </div>
  </div>
  )
}

export default App
