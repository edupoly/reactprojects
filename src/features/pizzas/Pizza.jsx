import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../cart/cartSlice'

function Pizza({pizza}) {
    var [thispizza,setThisPizza] = useState({...pizza})
    var dispatch = useDispatch()
    function updatePrice(ev){
        setThisPizza({...thispizza,price:ev.target.value})
    }
  return (
    <div className='p-2 w-25'>
        <img src={thispizza.img} className='w-100 rounded' alt="" />
        <h5>{thispizza.name}</h5>
        <select className='form-control' name="" id="" onChange={(e)=>{updatePrice(e)}}>
            {
                Object.keys(thispizza.sizeandcrust[0]).map((sc)=>{
                    return <option value={thispizza.sizeandcrust[0][sc][0].price}>{sc}</option>
                })
            }
        </select>
        <div className=' d-flex justify-content-between btn btn-success' onClick={()=>{dispatch(addToCart(thispizza))}}>

                <b>Add</b> <b>Rs.{thispizza.price}</b>

        </div>
    </div>
  )
}

export default Pizza