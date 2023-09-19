import './App.css'
import Header from './Components/header/Header';
import Home from './Components/home/Home';
import LoginPage from './Components/login/LoginPage';
import SignupPage from './Components/login/SignupPage';
//import "./fonts/netflix-sans-font/NetflixSans-Regular.woff2"
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Box from './Components/watch/Box';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignupPage/>}></Route>
          <Route path='/login' element ={<LoginPage/>}></Route>
          <Route path='/browse' element={<Home/>}></Route>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
