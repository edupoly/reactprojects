import logo from './logo.svg';
import './App.css';
import pizzas from './pizzas.json'
import { useEffect } from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Cart from './features/cart/Cart';
function App() {
  useEffect(()=>{
    console.log(pizzas)
  })
  return (
    <div className='bg-light vh-100'>
      <Navbar></Navbar>
      <div className='d-flex flex-wrap'>
        <div style={{width:"75%"}}>
          <Outlet></Outlet>
        </div>
        <div style={{width:"25%"}}>
          <Cart></Cart>
        </div>
      </div>
    </div>
  );
}

export default App;
