import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { createClient } from "@supabase/supabase-js";

import Home from './pages/Home'
import Cart from './pages/Cart'
import Navbar from './components/UI/navbar'
import LogIn from './pages/Login'
import SignUp from './pages/Signup'
import Profile from './pages/Profile'
import HelpPage from './pages/Help'
import ProductView from './pages/ProductView'

const supabase = createClient("https://bvbyifqplonojbgaeafg.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ2YnlpZnFwbG9ub2piZ2FlYWZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg0MzA2ODAsImV4cCI6MjAyNDAwNjY4MH0.16txlFiUZ7kfJuCDe8G5aWu2gUg_455R6dmp5f5nFHY");
const App = () => {
  const [countries, setCountries] = useState([]);

    useEffect(() => {
      getCountries();
    }, []);

    async function getCountries() {
      const {data} = await supabase.from("countries").select();
      setCountries(data);
    }

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
        </Routes>
        <ul>
        {countries.map((country) => (
          <li key={country.name}>{country.name}</li>
        ))}
      </ul>
      </main>
    </Router>
  )
}

export default App