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
import Reviews from './pages/Reviews.jsx';
import Login from './pages/auth/Login.jsx';
import Signup from './pages/auth/Signup.jsx';
import NotFound from './pages/NotFound.jsx';
import { useSelector } from 'react-redux';


function App() {
  // const [count, setCount] = useState(0)
  const user = useSelector((state)=>state.auth.user);
  console.log(user);
  return (
    <BrowserRouter>
    {/* Nav,  <a href=".." > = full reloads, so use <Link>*/}
      <nav>
        <Link to="/"> Home </Link> |
        {user && <Link to="/profile"> Profile </Link>}
        {user && "|"}
        <Link to="/companies"> Companies </Link> |
        <Link to="/company/1"> Company </Link> |
        <Link to="/prep"> Prep </Link> |
        <Link to="/reviews"> Reviews </Link> |
        <Link to="/signup"> SignUp</Link>
      </nav>

      {/* Routes Def */}
      <Routes>
        <Route path='/' element={<Home />} />
        {user && <Route path='/profile' element={<Profile />} />}
        <Route path='/companies' element={<Companies />} />
        {user && <Route path='/company/:companyID' element={<Company />} />}
        <Route path='/prep' element={<Prep />} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        {/* //logout */}
        {/* Rest all paths, errors */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
