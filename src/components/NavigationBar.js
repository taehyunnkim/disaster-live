import React from 'react';
import { Navbar, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

export default function NavigationBar() {
    return (
        <Navbar color="white" light expand="md">
          <div className='container'>
            <img id="projectLogo" src="./img/proj_logo.png" alt="logo with red connection"/>
            <NavLink to="/" activeClassName='nav-active'>Disaster Live</NavLink>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="/about" activeClassName='nav-active'>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/donate" activeClassName='nav-active'>Donate</NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink href="/signin">Sign in</NavLink>
              </NavItem> */}
            </Nav>
          </div>
        </Navbar>
    )
}
