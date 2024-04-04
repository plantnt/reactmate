import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom'

import Navbar from './components/UI/navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import LogIn from './pages/Login'
import SignUp from './pages/Signup'
import ProfileView from './pages/ProfileView'
import HelpPage from './pages/Help'
import ProductView from './pages/ProductView'
import ChatPage from './pages/ChatHome'
import UserChats from './pages/Chats'
import ServicesChat from './pages/ChatServices'
import TosPage from './pages/ToS'
import ProductUpload from './pages/ProductUpload'
import Chat from './pages/ChatView'
import Profile from './pages/Profile'
import UserBrowser from './pages/UserBrowser'

import NavbarVisible from './components/UI/navbarvisible'
import Footer from './components/UI/footer'
import FooterVisible from './components/UI/footervisible'

import 'react-image-crop/dist/ReactCrop.css'

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
          <Route path='/profilePage/:userId' element={<Profile/>} />
          <Route path='/profilePageView' element={<ProfileView/>} />
          <Route path='/logIn' element={<LogIn/>} />
          <Route path='/signUp' element={<SignUp/>} />
          <Route path='/helpPage' element={<HelpPage/>} />
          <Route path='/productPage' element={<ProductView/>} />
          <Route path='/productUpload' element={<ProductUpload/>} />
          <Route path='/chatHome' element={<ChatPage/>} />
          <Route path='/chatingPage' element={<UserChats/>} />
          <Route path='/chatingServices' element={<ServicesChat/>} />
          <Route path='/chatView' element={<Chat/>} />
          <Route path='/userBrowser' element={<UserBrowser/>} />
          <Route path='/termsOfService' element={<TosPage/>} />
        </Routes>
        <FooterVisible>
          <Footer/>
        </FooterVisible>
      </main>
    </Router>
  )
}

export default App