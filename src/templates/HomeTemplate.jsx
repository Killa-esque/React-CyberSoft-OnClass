import React, { Component } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default class HomeTemplate extends Component {
    render() {
        return (
            <div>
                <header className='bg-dark text-white p-2 nav'>
                    {/* Xài thẻ a sẽ bị load lại toàn bộ */}
                    {/* <a href="/home" className='nav-link text-white'>Home</a>
                    <a href="/register" className='nav-link text-white'>Register</a>
                    <a href="/login" className='nav-link text-white'>Login</a> */}
                    {/* Xài NavLink để chỉ load mỗi phần Outlet thôi */}
                    <NavLink to='/home' className={({isActive}) => isActive ? 'nav-link bg-white text-dark' : 'nav-link'}>Home</NavLink>
                    <NavLink to='/register' className={({isActive}) => isActive ? 'nav-link bg-white text-dark' : 'nav-link'}>Register</NavLink>
                    <NavLink to='/login' className={({isActive}) => isActive ? 'nav-link bg-white text-dark' : 'nav-link'}>Login</NavLink>
                    <NavLink to='/btgiohang' className={({isActive}) => isActive ? 'nav-link bg-white text-dark' : 'nav-link'}><i className='fa fa-cart-plus mx-2'></i>BT Giỏ hàng</NavLink>
                    <NavLink to='/form' className={({isActive}) => isActive ? 'nav-link bg-white text-dark' : 'nav-link'}>Form</NavLink>
                </header>
                <div className='content' style={{ minHeight: '75vh' }}>
                    <Outlet />
                </div>
                <footer className='bg-dark text-white p-5'>Footer</footer>
            </div>
        )
    }
}
