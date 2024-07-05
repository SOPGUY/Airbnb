
import Home from './pages/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import SignUp from './pages/SignUp'

import Airbnb from './pages/Airbnb'
import LoginIn from './pages/Login'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<LoginIn/>}/>
        <Route path='/airbnb' element={<Airbnb/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App