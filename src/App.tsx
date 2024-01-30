import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

import Home from './pages/Home'
import Cart from './pages/Cart'
import Navbar from './components/Navbar/navbar'

const App = () => {
  return (
    <Router>
      <main>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cartPage' element={<Cart/>} />
        </Routes>
      </main>
    </Router>
  )
}

export default App