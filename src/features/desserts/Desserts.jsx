import React from 'react'
import { useGetAllDessertsQuery } from '../../services/dessertApi'
import Dessert from './Dessert';

function Desserts() {
    var {isLoading,data:desserts}=useGetAllDessertsQuery();
    console.log(desserts)
  return (
    <div>
      <div className=''>
        <div className='d-flex justify-content-between px-3'>
            <b>Desserts</b>
        </div>
        <div className='d-flex flex-wrap'>
            {
                !isLoading && desserts.map((dessert,i)=>{
                    return  <Dessert dessert={dessert}  key={i}></Dessert>
                })
            }
        </div>
    </div>
    </div>
  )
}

export default Desserts