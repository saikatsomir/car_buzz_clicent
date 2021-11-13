import React, {useState} from 'react';
import Button from '@mui/material/Button';
import useAuth from '../../../hooks/useAuth';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
import { Typography } from '@mui/material';

const Navbar = () => {
    const {user, logOut} = useAuth()
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
  
    return (


      <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
          <Typography variant="h2" sx={{fontFamily: 'Courgette', fontWeight:'400'}}>
                Car Buzz <br/>
          </Typography>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/explore"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Explore
              </NavLink>
            </li>
            <li className="nav-item">
             {user.email && <NavLink
                exact
                to="/dashboard"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                DashBoard
              </NavLink>}
            </li>
            <li className="nav-item">
              {user.email? <Button onClick={logOut} sx={{color:'white', fontSize:'17px'}} color="inherit">Sign Out</Button>: <NavLink
                exact
                to="/login"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Sign In
              </NavLink>}
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>

    );
};

export default Navbar;