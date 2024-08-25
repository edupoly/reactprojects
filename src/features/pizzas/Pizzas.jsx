import React, { useState } from 'react'

import Pizza from './Pizza'
import { useGetAllPizzasQuery } from '../../services/pizzasapi';
function Pizzas() {

  var {isLoading,data:pizzas}=useGetAllPizzasQuery()
  return (
    <div className='d-flex flex-wrap p-2'>
        {
          pizzas?.map((pizza)=>{
            return <Pizza pizza={pizza}></Pizza>
          })
        }
    </div>
  )
}

export default Pizzas