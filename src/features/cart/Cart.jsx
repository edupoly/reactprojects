import React from 'react'
import { useSelector } from 'react-redux'

function Cart() {
  var {cart} = useSelector(state=>state.cart)
  console.log(cart)
  return (
    <div className="border-danger p-2 d-flex flex-column justify-content-between h-100">
        <h1>Cart:{cart.length}</h1>
        <i>
        Your basket looks a little empty. Why not check out some of our unbeatable deals?
        </i>
        {
          cart.map((cartItem)=>{
            return <li style={{listStyle:"none",backgroundColor:'white',padding:'10px'}}>
              <div className='d-flex justify-content-between'>
                <p>{cartItem.name}</p>
                <b>{cartItem.price}</b>
              </div>
            </li>
          })
        }
        <h1>Total:{cart.reduce((a,b)=>{return a+ +b.price},0)}</h1>
    </div>
  )
}

export default Cart