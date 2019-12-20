import React from 'react'
import logo from '../logo.svg';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function LeftSidebar() {
    return <div className="left-panel">
        <div className="leftSide-container">
            <div className="brand-name">
                <div className="d-flex align-items-center">
                    <img src={logo} className="App-logo" alt={"logo"} />
                    <div>
                        <h1 className="mb-0 text-white">React JS</h1>
                    </div>
                </div>
            </div>

            <div className="menu">
                <Router>
                    <Link to="/#/home" className="active">Home</Link>
                    <Link to="/#/services">Services</Link>
                    <Link to="/#/clients">Clients</Link>
                    <Link to="/#/contact">Contact</Link>
                </Router>
            </div>
        </div>
    </div>
}

// const LeftSidebar = () => {
//     return React.createElement(
//         'div',
//         { className: 'left-panel' },
//         React.createElement(
//             'div',
//             { className: 'leftSide-container' },
//             React.createElement(
//                 'div',
//                 { className: 'brand-name' },
//                 React.createElement(
//                     'div',
//                     { className: 'd-flex align-items-center' },
//                     React.createElement(
//                         'img',

//                     )

//                 )
//             ))
//     )
// }

export default LeftSidebar