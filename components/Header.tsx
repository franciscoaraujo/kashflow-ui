import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-blue-800 p-4 flex justify-between items-center">
            <div className="flex items-center">
                <img src="/path/to/logo.png" alt="Logo" className="h-8 mr-3" />
                <nav>
                    <ul className="flex space-x-4 text-white">
                        <li><Link to="/" className="hover:text-blue-300">Home</Link></li>
                        <li><Link to="/about" className="hover:text-blue-300">About</Link></li>
                        <li><Link to="/services" className="hover:text-blue-300">Services</Link></li>
                        <li><Link to="/contact" className="hover:text-blue-300">Contact</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="flex items-center space-x-4">
                <Link to="/login" className="text-white hover:text-blue-300">Login</Link>
                <Link to="/signup" className="bg-white text-blue-800 px-4 py-2 rounded hover:bg-blue-300 hover:text-white">Sign Up</Link>
            </div>
        </header>
    );
};

export default Header;