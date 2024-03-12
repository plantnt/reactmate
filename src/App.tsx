import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Navbar from './components/UI/navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import LogIn from './pages/Login'
import SignUp from './pages/Signup'
import Profile from './pages/Profile'
import ProfileView from './pages/ProfileView'
import HelpPage from './pages/Help'
import ProductView from './pages/ProductView'
import ChatPage from './pages/ChatHome'
import UserChats from './pages/Chats'
import ServicesChat from './pages/ChatServices'
import TosPage from './pages/ToS'
import Upload from './pages/ProductUpload'
import Chat from './pages/ChatView'

import NavbarVisible from './components/UI/navbarvisible'

const App = () => {
  return (
    <Router>  
      <main>
        <NavbarVisible>
          <Navbar/>
        </NavbarVisible>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cartPage' element={<Cart/>} />
          <Route path='/profilePage' element={<Profile/>} />
          <Route path='/logIn' element={<LogIn/>} />
          <Route path='/signUp' element={<SignUp/>} />
          <Route path='/helpPage' element={<HelpPage/>} />
          <Route path='/ProductPage' element={<ProductView/>} />
          <Route path='/chatHome' element={<ChatPage/>} />
          <Route path='/chatingPage' element={<UserChats/>} />
          <Route path='/chatingServices' element={<ServicesChat/>} />
          <Route path='/chatView' element={<Chat/>} />
          <Route path='/profilePageView' element={<ProfileView/>} />
          <Route path='/termsOfService' element={<TosPage/>} />
          <Route path='/ProductUpload' element={<Upload/>} />
        </Routes>
      </main>
    </Router>
  )
}

export default App