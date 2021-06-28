import React from 'react'
import logo from '../../assets/icons/logo.svg'
import cart from '../../assets/icons/cart.svg'
import favorites from '../../assets/icons/favorite.svg'
import user from '../../assets/icons/user.svg'
import './style.scss'

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img className="header-left__logo" src={logo} alt="logo" />
        <div className="header-left__text">
          <h4 className="header-left__title">REACT SNEAKERS</h4>
          <h5 className="header-left__subtitle">Магазин лучших кроссовок</h5>
        </div>
      </div>
      <ul className="header-right">
        <li className="header-right__cart">
          <img src={cart} alt="cart" />
          <span>1205 руб.</span>
        </li>
        <li className="header-right__favorites">
          <img src={favorites} alt="cart" />
        </li>
        <li className="header-right__user">
          <img src={user} alt="cart" />
        </li>
      </ul>
    </header>
  )
}
