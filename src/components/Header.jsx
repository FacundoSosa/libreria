import React from 'react'
import cartIcon from "../assets/icons/cart.svg"

function Header() {
  return (
    <header>
      <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
        <img src={cartIcon} alt="cart-icon.svg" />
      </button>
    </header>
  )
}

export default Header
