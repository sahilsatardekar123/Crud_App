import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
// import {  useSelector } from 'react-redux';
import Home from './elements/Home';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Nav from './Nav';
import Update from './Update';

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
    
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/create' element={<Nav/>}></Route>
        <Route path="/edit/:id" element={<Update/>} />
      </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
