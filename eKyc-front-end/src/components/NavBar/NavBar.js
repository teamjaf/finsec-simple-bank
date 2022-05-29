import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css'

const NavBar = () => {

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    {/* <Link to="/verifyId">Verify</Link> */}
                </li>
                <li>
                    <Link to="/clientData">Add New Bank</Link>
                </li>
                <li>
                    <Link to="/viewData">View Banks</Link>
                </li>
            </ul>
        </nav>
    )

}

export default NavBar;