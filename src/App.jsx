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
    <div className='bg-info vh-100 container p-5'>
      <Navbar></Navbar>
      <div className='d-flex flex-wrap'>
        <div style={{width:"75%"}}>
          <Outlet></Outlet>
        </div>
        <div style={{width:"25%",height:'500px'}}>
          <Cart></Cart>
        </div>
      </div>
    </div>
  );
}

export default App;

/*
  Pizzahut(parent)
    div ===>list of pizzas
            ==>each pizza is a component(Pizza)
    Cart ===> shows cart items


*/