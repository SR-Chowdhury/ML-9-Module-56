import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav>
            <Link className='li' to="/">Home</Link>
            <Link className='li' to="/order-review">Order Review</Link>
            <Link className='li' to="/bbb">BBB</Link>
            <Link className='li' to="/zzz">ZZZ</Link>
        </nav>
    );
};

export default Header;