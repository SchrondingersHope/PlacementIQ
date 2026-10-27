import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'
import Profile from './pages/Profile.jsx';
import Home from './pages/Home.jsx';
import Company from './pages/Company.jsx';
import Companies from './pages/Companies.jsx';
import Prep from './pages/Prep.jsx';
import Login from './pages/auth/Login.jsx';
import Signup from './pages/auth/Signup.jsx';
import NotFound from './pages/NotFound.jsx';



function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    {/* Nav,  <a href=".." > = full reloads, so use <Link>*/}
      <nav>
        <Link to="/"> Home </Link> |
        <Link to="/profile"> Profile </Link> |
        <Link to="/companies"> Companies </Link> |
        <Link to="/company"> Company </Link> |
        <Link to="/prep"> Prep </Link> |
        <Link to="/signup"> SignUp</Link>
      </nav>

      {/* Routes Def */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/companies' element={<Companies />} />
        <Route path='/company/:companyID' element={<Company />} />
        <Route path='/prep' element={<Prep />} />

        {/* Rest all paths, errors */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
