import React from 'react'
import Login from './Login'
import {Routes, Route} from 'react-router-dom'
import Signup from './Signup'
import Home from './Home'


function App() {
  return (
    
     <Routes>
      
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
    
  )
}

export default App