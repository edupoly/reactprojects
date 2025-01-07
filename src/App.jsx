import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Cart from './features/Cart/Cart';
import Mobilecart from './features/Cart/Mobilecart';


function App() {
  return (
    
    <div className='row'>
      <div className='col-md-8 pb-5'>
        <div style={{backgroundAttachment:'fixed',backgroundImage:"url('https://img.freepik.com/free-vector/polygonal-background_53876-60251.jpg?t=st=1724074061~exp=1724077661~hmac=517606dea5f4e5bd64d23a20f0340ac9e6f7f5d2f6e28bcca4ade03e5701e2c7&w=1060')"}}>
          <Navbar></Navbar>
          <Outlet></Outlet>
        </div>
      </div>
      <div style={{backgroundColor:"white"}} className='col-md-4 d-md-block d-sm-none d-none col-0'>
        <Cart></Cart>
      </div>
      <div style={{backgroundColor:"white"}} className='bg-light col d-md-none d-sm-block d-block fixed-bottom'>
        <Mobilecart></Mobilecart>
      </div>
    </div>
  );
}

export default App;
