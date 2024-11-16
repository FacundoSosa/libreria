import React, { useContext } from 'react'
import { CartContext } from './CartContext';

function BookItem({book}) {

  const { addToCart } = useContext(CartContext);
  
  return (
    <div className='card col-sm-2 m-3'>
      <img src={book.image} alt={book.title} />
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p>${book.price}</p>
      <button onClick={() => addToCart(book)} className='btn btn-dark'>Añadir al Carrito</button>
    </div>
  )
}

export default BookItem
