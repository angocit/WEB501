import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='shadow-sm'>
        <div className='max-w-10/12 mx-auto'>
            <div className='logo'>NGOCNV34</div>
            <nav>
              <ul>
                <li><NavLink to={'/'}>Trang chủ</NavLink></li>
                <li><NavLink to={'/shop'}>Shop</NavLink></li>
                <li><NavLink to={'/gioi-thieu'}>Giới thiệu</NavLink></li>
                <li><NavLink to={'/lien-he'}>Liên hệ</NavLink></li>
              </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header