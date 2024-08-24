import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCartItem, updateCartItem } from './cartSlice'

function Cart() {
  var {cartItems,discount} = useSelector(state=>state.cart)
  var dispatch = useDispatch()
  console.log(cartItems)
  function getTotal(){
    var total = cartItems.reduce((sum,item)=>{return sum+item.price},0)
    console.log(discount,total)
    total-=(total*(discount/100));
    return total;
  }
  return (
    <>
    <div className='p-4 d-flex flex-column vh-100 justify-content-between' style={{overflow:"scroll",position:'sticky',top:'0px'}}>
      <h1 className='text-center'> Cart </h1>
      {cartItems.length===0 && <i className='text-secondary'>Your basket looks a little empty. Why not check out some of our unbeatable deals?</i>}
      
      <ul className='p-0'>
      <button type="button" class="btn btn-outline-success my-5" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Apply Coupon code or Gift code 
        <i class="bi bi-caret-right-fill text-success"></i>
      </button>
        {cartItems?.map((item,i)=>{
          return <li className='d-flex justify-content-between p-2'>
              <b>{item.name}</b>
              <div>
                <i>Rs.{item.price*10}</i>
                <i class="bi bi-trash p-3" onClick={()=>{dispatch(deleteCartItem(i))}}></i>
              </div>
            </li>
        })}
      </ul>
      <ol class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">Bill:</div>
          </div>
          <span class="badge text-bg-primary rounded-pill">Rs.{cartItems.reduce((a,b)=>(a+b.price),0)*10}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">Discount</div>
          </div>
          <span class="badge text-bg-primary rounded-pill">{discount}%</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start display-6">
            <div class="ms-2 me-auto">
              <div class="fw-bold">Total:</div>
            </div>
            <span class="badge text-bg-success rounded">Rs.{getTotal()*10}</span>
        </li>
      </ol>
      
    </div>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="floatingInput" placeholder="PARTY10" />
          <label for="floatingInput">ENTER Coupon Code</label>
        </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" onClick={()=>{dispatch(updateCartItem())}} data-bs-dismiss="modal">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}

export default Cart