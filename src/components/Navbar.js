import React from 'react'
import { Link } from 'react-router-dom'
import { setLogout } from "../redux/features/authSlice"
import { useDispatch, useSelector } from "react-redux";
import { MDBNavbarItem, MDBNavbarLink } from 'mdb-react-ui-kit';

const Navbar = () => {
 
  const { user} = useSelector((state) => ({ ...state.auth }));
const dispatch=useDispatch()
const handleLogout= ()=>{
 dispatch(setLogout())   
}

  return (
    <div className="navbar">
        
        <div class="title">
          <h1 class="head"> 
          <span className="abb">SBA</span>
          <br></br>
          <span class="intro">SWIFT BOOKING AMBLANCE</span> 
          </h1></div>
        <div className="right">
            <ul className="navlinks">
                <Link className='decor'  to='/'><li className='link' id="link">Home</li></Link>
                {user?.result?._id ? (
              
                <Link className='decor' to="/login">
                  <li className='link' onClick={() => handleLogout()}>
                    Logout
                  </li>
                </Link>
              
            ) : (
              <>
              <Link className='decor' to='/login'><li className='link'id="link">Login</li></Link>

              <Link className='decor' to='/register'><li className='link'id="link">Register</li></Link>

              </>
              
            )}
                 <Link className='decor' to='/book'><li className='link'id="link">Booking</li></Link>
                
                
            </ul>
        </div>
    </div>
  )
}

export default Navbar