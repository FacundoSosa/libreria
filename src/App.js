import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Cart from './components/Cart/Cart';
import Catalog from './components/Catalog/Catalog';
import BookDetail from './components/Catalog/BookDetail';
import Checkout from './components/Checkout/Checkout';
import { CartProvider } from './components/CartContext';


function App() {
  return (
    <div className="App">
      <Header />
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Catalog />} />
            <Route path="/books/:id" element={<BookDetail />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Router>
        <Cart />
      </CartProvider>
    </div>
  );
}

export default App;
