import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import ShoppingCartState from './context/shoppingCart/ShoppingCartState';
import CartPage from './pages/CartPage';
import Home from './pages/Home';

function App() {
  return (
    <ShoppingCartState>
      <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path='/cart' element={<CartPage />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </ShoppingCartState>
  );
}

export default App;
