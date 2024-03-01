import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Cart from './pages/Cart'
import Navbar from './components/UI/navbar'
import LogIn from './pages/Login'
import SignUp from './pages/Signup'
import Profile from './pages/Profile'
import HelpPage from './pages/Help'
import ProductView from './pages/ProductView'
import Upload from './pages/ProductUpload'

const App = () => {
  return (
    <Router>
      <Navbar></Navbar>
      <main>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cartPage' element={<Cart/>} />
          <Route path='/profilePage' element={<Profile/>} />
          <Route path='/logIn' element={<LogIn/>} />
          <Route path='/signUp' element={<SignUp/>} />
          <Route path='/helpPage' element={<HelpPage/>} />
          <Route path='/ProductPage' element={<ProductView/>} />
          <Route path='/ProductUpload' element={<Upload/>} />
        </Routes>
      </main>
    </Router>
  )
}

export default App