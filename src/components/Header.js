import React from 'react'
import { Link } from 'react-router-dom';
import '../css/header.css';

export default function Header() {
    return (
        <nav className='header'>
            <Link to="/">
                <img 
                    className='header_logo'
                    src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/large-images-amazon-png-logo-vector-7.png3ft3d1416935166817"
                />
            </Link>
            <input type="text" className='header_searchInput'/>
            
        </nav>
    )
}
