import './App.css';
import Cart from './components/Cart';
import Catalog from './components/Catalog';
import { CartProvider } from './components/CartContext';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <CartProvider>
        <Catalog />
        <Cart />
      </CartProvider>
    </div>
  );
}

export default App;
