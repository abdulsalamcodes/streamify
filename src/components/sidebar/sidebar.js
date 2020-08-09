import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'
import './sidebar.scss'
import { ReactComponent as HomeIcon } from './icons/home.svg'
import { ReactComponent as MenuIcon } from './icons/menu.svg'

function Sidebar() {
    return (
        <div className='sidebar'>
            <Link to='/' className='app-name'>
                <h1>Stream<span className='sity'>sity</span></h1>
            </Link>

            <div>
                <p className='library'>LIBRARY</p>
                <div className='links-container'>
                    <NavLink
                        exact
                        to='/'
                        className='link'
                        activeStyle={{ color: '#ff00cd' }}
                    >
                        <HomeIcon className='icon'
                            activeStyle={{ color: '#ff00cd' }} />
                        Home
                        </NavLink>

                    <NavLink
                        to='/browse'
                        className='link'
                        activeStyle={{ color: '#ff00cd' }}
                    >
                        <MenuIcon className='icon' />
                        Browse
                        </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Sidebar