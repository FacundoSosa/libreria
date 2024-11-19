import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext';

function BookItem({ book }) {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1); // Estado local para la cantidad

  // Manejar aumento y disminución de cantidad
  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(prev => prev - 1); // Evitar que sea menor a 1
  };

  // Función para manejar la adición al carrito y resetear la cantidad
  const handleAddToCart = () => {
    addToCart(book, quantity); // Agregar al carrito con la cantidad actual
    setQuantity(1); // Resetear la cantidad a 1 después de agregar
  };

  return (
    <div className="card col-sm-2 m-3">
        <Link to={`/books/${book.id}`} className="card-body">
          <img src={book.image} alt={book.title} className="card-img-top" />
          <div>
            <h3 className="card-title">{book.title}</h3>
            <p className="card-text">Autor: {book.author}</p>
            <p className="card-text">Precio: ${book.price}</p> 
          </div>
        </Link>
          
          <div className="quantity-controls">
              <button onClick={decreaseQuantity} className="btn btn-outline-secondary">-</button>
              <span className="mx-2">{quantity}</span>
              <button onClick={increaseQuantity} className="btn btn-outline-secondary">+</button>
          </div>

          <button
            onClick={handleAddToCart} // Llamar a la función para agregar y resetear cantidad
            className="btn btn-dark mt-2"
          >
            Añadir al Carrito
          </button>
      </div>


  );
}

export default BookItem;


