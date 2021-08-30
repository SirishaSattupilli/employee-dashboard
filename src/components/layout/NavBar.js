import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
            <div >
                        <a className="navbar-brand" href="/">Employee Dashboard</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to="/" exact>Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about" exact>About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact" exact>Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className="btn btn-outline-light" to="/employees/add">Add Employee</Link>
                </div>
            </nav>

        </div>
    )
}

export default NavBar
