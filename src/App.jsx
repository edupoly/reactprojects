import logo from './logo.svg';
import './App.css';
import pizzas from './pizzas.json'
import { useEffect } from 'react';
function App() {
  useEffect(()=>{
    console.log(pizzas)
  })
  return (
    <div className='container bg-light vh-100'>
      <h1>
      <i class="bi bi-pc-display"></i>
        Edupoly
      </h1>
    </div>
  );
}

export default App;
