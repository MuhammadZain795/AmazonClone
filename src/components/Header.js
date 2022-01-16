import React from 'react'
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
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
            <div className='header_search'>
                <input type="text" className='header_searchInput'/>
                <SearchIcon className='hearder_serachIcon'/>
            </div>
            <div className='header_nav'>
                <Link to={"/login"} className='header_links'>
                    <div className='header_options'>
                        <span>Hello</span>
                        <span>Sign In</span>
                    </div>                    
                </Link>
                
                <Link to={"/login"} className='header_links'>
                    <div className='header_options'>
                        <span>Hello</span>
                        <span>Sign In</span>
                    </div>                    
                </Link>

                <Link to={"/login"} className='header_links'>
                    <div className='header_options'>
                        <span>Hello</span>
                        <span>Sign In</span>
                    </div>                    
                </Link>


            </div>
        </nav>
    )
}
