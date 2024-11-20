import React from 'react'
import cartIcon from "../assets/icons/cart.svg"
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='d-flex justify-content-between m-2'>
      <Link to="/" className='btn btn-dark'>Inicio</Link>
      <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
        <img src={cartIcon} alt="cart-icon.svg" />
      </button>
    </header>
  )
}

export default Header
