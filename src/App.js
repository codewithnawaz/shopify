
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {Routes, Route} from "react-router-dom";
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';
import Contact from './components/Contact';
import Register from './components/Register';


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/products' element={<Products/>}/>
      <Route exact path='/products/:id' element={<Product/>}/>
      <Route exact path='/cart' element={<Cart/>}/>
      <Route exact path='/contact' element={<Contact/>}/>
      <Route exact path='/register' element={<Register/>}/>
    </Routes>
    </>
  );
}

export default App;
