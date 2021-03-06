import React from 'react'
import Home from "../components/Home"
import About from "../components/About"
import Services from "../components/Services"
import Clients from "../components/Clients"
import Contact from "../components/Contact"


function RightSidebar() {
    return <div className="right-panel">
        <div className="p-4">
            <nav className="py-3 navbar navbar-expand-lg navbar-dark">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
                    aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent-333">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home
                        <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">Dropdown
                        </a>
                            <div className="dropdown-menu dropdown-default" aria-labelledby="navbarDropdownMenuLink-333">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto nav-flex-icons">
                        <li className="nav-item">
                            <a className="nav-link waves-effect waves-light">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link waves-effect waves-light">
                                <i className="fab fa-google-plus-g"></i>
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-user"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right dropdown-default"
                                aria-labelledby="navbarDropdownMenuLink-333">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
}

export default RightSidebar