import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './sidebar.scss'
import { ReactComponent as HomeIcon } from './home.svg'
import { ReactComponent as MenuIcon } from './menu.svg'

function Sidebar() {
    return (
        <div className='sidebar'>
            <Link to='/'className='app-name'>
                <h1>Stream<span className='sity'>sity</span></h1>
            </Link>

            <div>
                <p>LIBRARY</p>
                <div className='links-container'>
                    <Link to='/' className='link'>
                        <HomeIcon className='icon' />
                        Home
                        </Link>
                    <Link to='/browse' className='link'>
                        <MenuIcon className='icon' />
                        Browse
                        </Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar