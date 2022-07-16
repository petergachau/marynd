
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import Book from './pages/Book';
import { useEffect } from 'react';
import { setUser } from './redux/features/authSlice';
import { useDispatch, useSelector } from "react-redux";

// import Home from './components/pages/Home';
function App() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  useEffect(() => {
    dispatch(setUser(user));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      
       
        <BrowserRouter> 
        <Navbar/>
        <Routes >
         
          <Route path='/'  element={<Home/>}/>
          <Route path='/login'  element={<Login/>}/>
          <Route path='/register'  element={<Register/>}/>
          <Route path='/book'  element={<Book/>}/>
          
        </Routes>
        </BrowserRouter>
       
    </div>
  );
}

export default App;
