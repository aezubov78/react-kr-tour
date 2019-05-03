import React from 'react'
import './Navbar.scss'
import logokr from '../../logokr2.jpg'


export default function Navbar() {
  return (
      <nav className="navbar">
          <img
          src={logokr} 
          alt="Kriviy Rih" />

          <ul className="nav-links">
             <li>
                 <a href="/" className="nav-link">Главная</a>                
             </li>

            <li>
                 <a href="/" className="nav-link">О нас</a>                
            </li>

            <li>
                 <a href="/" className="nav-link active">Достопримечательности</a>                
            </li>
          </ul>
      </nav>
  )
}
