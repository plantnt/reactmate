import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Cart from './pages/Cart'
import LogIn from './pages/Login'
import SignUp from './pages/Signup'
import Profile from './pages/Profile'
import ProfileView from './pages/ProfileView'
import HelpPage from './pages/Help'
import ProductView from './pages/ProductView'
import ChatPage from './pages/Chats'
import DeseadosPage from './pages/subpages/Deseados'
import TosPage from './pages/ToS'
import Upload from './pages/ProductUpload'


const App = () => {
  return (
    <Router>  
      <main>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cartPage' element={<Cart/>} />
          <Route path='/profilePage' element={<Profile/>} />
          <Route path='/logIn' element={<LogIn/>} />
          <Route path='/signUp' element={<SignUp/>} />
          <Route path='/helpPage' element={<HelpPage/>} />
          <Route path='/ProductPage' element={<ProductView/>} />
          <Route path='/chatingPage' element={<ChatPage/>} />
          <Route path='/deseadosPage' element={<DeseadosPage/>} />
          <Route path='/profilePageView' element={<ProfileView/>} />
          <Route path='/termsOfService' element={<TosPage/>} />
          <Route path='/ProductUpload' element={<Upload/>} />
        </Routes>
      </main>
    </Router>
  )
}

export default App