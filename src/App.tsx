import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Cart from './pages/Cart'
import Navbar from './components/UI/navbar'
import LogIn from './pages/Login'
import SignUp from './pages/Signup'
import Profile from './pages/Profile'
import HelpPage from './pages/Help'
import ProductView from './pages/ProductView'

const App = () => {
  return (
    <Router>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <main className='bg-gray-50'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cartPage' element={<Cart/>} />
          <Route path='/profilePage' element={<Profile/>} />
          <Route path='/logIn' element={<LogIn/>} />
          <Route path='/signUp' element={<SignUp/>} />
          <Route path='/helpPage' element={<HelpPage/>} />
          <Route path='/ProductPage' element={<ProductView/>} />
        </Routes>
      </main>
    </Router>
  )
}

export default App;
