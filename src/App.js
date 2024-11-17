import './App.css';
import Cart from './components/Cart/Cart';
import Catalog from './components/Catalog/Catalog';
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
