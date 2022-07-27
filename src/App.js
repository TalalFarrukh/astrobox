import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Welcome from './components/Welcome'
import Working from './components/Working'
import Plan from './components/Plan'
import Footer from './components/Footer'
import Login from './components/Login'

function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path='/' element={<> <Welcome /> <Working /> <Plan /> <Footer /> </>}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>

      
    </BrowserRouter>
  );
}

export default App;
