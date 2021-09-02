import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="Navigation">
           <NavLink exact to = "/" activeClassName="nav-active">
               Accueil
           </NavLink>
           <NavLink exact to = "/about" activeClassName="nav-active">
               About
           </NavLink>
            
        </div>
    );
};

export default Navigation;