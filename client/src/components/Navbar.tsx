import React, { Component } from "react";
import { Link } from "react-router-dom";

const Navbar  = () => {

    React.useEffect(() => {
      fetch('http://localhost:8000/api/user')
        .then((user) => {
            console.log(user);
            
        })
    
      return () => {
      }
    }, [])
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="navbar-brand" href="/">Navbar</a>
                </li>
                <li className="nav-item">
                    <a className="navbar-brand" href="/users">Users</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar