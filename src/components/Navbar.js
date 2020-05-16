import React, { Component } from 'react'
import {Link} from 'react-router-dom'


class Navbar extends Component {
    render(){
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
              <Link to="/" className="navbar-brand">ExcerTracker</Link>
              <div className="collpase navbar-collapse whatever">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                <Link to="/" className="nav-link links">Exercises</Link>
                </li>
                <li className="navbar-item">
                <Link to="/create" className="nav-link links">Create Exercise Log</Link>
                </li>
                <li className="navbar-item">
                <Link to="/user" className="nav-link links">Create User</Link>
                </li>
              </ul>
              </div>
            </nav>
          );
    }
}

export default Navbar