import React, { useContext, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CartContext } from '../CartContext';
import books from '../../data/books.json'; // Importa los libros desde el archivo JSON

function BookDetail() {
  const { id } = useParams(); // Obtén el ID del libro desde la URL
  const book = books.find(book => book.id === parseInt(id)); // Encuentra el libro en el catálogo
  const { addToCart } = useContext(CartContext); // Contexto del carrito

  const [quantity, setQuantity] = useState(1); // Estado para la cantidad

  // Funciones para manejar las cantidades
  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
  };

  // Función para agregar al carrito
  const handleAddToCart = () => {
    addToCart(book, quantity);
    setQuantity(1); // Resetear cantidad después de agregar
  };

  if (!book) return <p>Libro no encontrado.</p>; // Manejo de errores si el libro no existe

  return (
    <div className="book-detail container">
      <Link to="/" className="btn btn-secondary mb-3">Volver al Catálogo</Link>
      <div className="row">
        <div className="col-md-4">
          <img src={book.image} alt={book.title} className="img-fluid" />
        </div>
        <div className="col-md-8">
          <h2>{book.title}</h2>
          <p><strong>Autor:</strong> {book.author}</p>
          <p><strong>Precio:</strong> ${book.price}</p>
          <p><strong>Reseña:</strong> {book.review || 'Reseña no disponible.'}</p>

          <div className="quantity-controls mb-3">
            <button onClick={decreaseQuantity} className="btn btn-outline-secondary">-</button>
            <span className="mx-2">{quantity}</span>
            <button onClick={increaseQuantity} className="btn btn-outline-secondary">+</button>
          </div>

          <button
            onClick={handleAddToCart}
            className="btn btn-dark"
          >
            Añadir al Carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;