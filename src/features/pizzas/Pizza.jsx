import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../Cart/cartSlice';

function Pizza({pizza}) {
    var [selectedSizeAndCrustPrice,setSelectedSizeAndCrustPrice]=useState({})
    var dispatch = useDispatch();
    useEffect(()=>{
        var [x] = Object.keys(pizza.sizeandcrust[0])
        setSelectedSizeAndCrustPrice(pizza.sizeandcrust[0][x][0].price)
    },[])
  

    function addPizzaToCart(pizza){
        dispatch(addToCart({...pizza,price:selectedSizeAndCrustPrice}));
    }
    return (
        <div className='w-25 p-2 d-flex flex-column justify-content-between'>
            <div>
            <img src={pizza.img} className='rounded w-100' alt="" />
            <p>
                <b>{pizza.name}</b>
                <br />
                { pizza.veg && <i className="bi bi-record-btn-fill text-success"></i>}
                { !pizza.veg && <i className="bi bi-record-btn-fill text-danger"></i>}
            </p>
            <p>
                {pizza.description}
            </p>
            </div>
            <div>
                <select onChange={(e)=>{setSelectedSizeAndCrustPrice(e.target.value)}} className='w-100 form-select'>
                    {
                        Object.keys(pizza.sizeandcrust[0]).map((sc,i)=>{
                            return <option value={pizza.sizeandcrust[0][sc][0].price} key={i}>{sc}</option>
                        })
                    }
                </select>
                <div className="my-2 btn btn-success d-flex justify-content-between" onClick={()=>{addPizzaToCart(pizza)}}>
                    <b>Add</b> Rs.{selectedSizeAndCrustPrice*10}
                </div>
            </div>
        </div>
  )
}

export default Pizza