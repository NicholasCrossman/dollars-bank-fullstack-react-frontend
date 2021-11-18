import '../css/NavbarBank.css'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink} from 'react-router-dom';

function NavbarBank() {
  
  return (
   <div>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="glow">
            Dollars Bank
          </NavLink>

          <ul className="nav-menu">
              <li className="nav-item">
                <NavLink exact to="/deposit" className="nav-links">
                   Make a Deposit
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/withdrawl" className="nav-links">
                   Make a Withdrawl
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/transfer" className="nav-links">
                   Transfer Funds
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/passchange" className="nav-links">
                  Change Your Password
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/logout" className="nav-links">
                  Logout
                </NavLink>
              </li>
          </ul>
        </div>
      </nav>
  </div>
  ) 
} 
export default NavbarBank;