import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='container-flued py-3 text-center bg-black mb-3'>
            <Link className='li' to="/">Home</Link>
            <Link className='li' to="/order-review">Order Review</Link>
            <Link className='li' to="/grandpa">Grandpa</Link>
            <Link className='li' to="/zzz">Contact</Link>
        </nav>
    );
};

export default Header;