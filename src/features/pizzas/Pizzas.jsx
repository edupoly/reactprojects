import React from 'react'
import { useGetAllPizzasQuery } from '../../services/pizzaApi'
import Pizza from './Pizza';
import pizzas from '../../services/pizzas.json'
function Pizzas() {
    // var {isLoading,data:pizzas} = useGetAllPizzasQuery();
    var [isVeg,setIsVeg] = React.useState(false);

    function vegFilter(){
        if(!isVeg){
            return pizzas
        }
        else{
            return pizzas.filter((pizza)=>{
                if(pizza.veg){
                    return true
                }
            })
        }
    }
  return (
    <div className=''>
        <div className='d-flex justify-content-between p-3 '>
            <b>Pizzas</b>
            <div className=''>
                <div className="form-check form-switch">
                    <label className="form-check-label">Veg:{isVeg}</label>
                    <input className="form-check-input"  value={true} onChange={(e)=>{setIsVeg(e.target.checked)}} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                </div>
            </div>
        </div>
        <div className='row m-3'>
            {
                vegFilter().map((pizza,i)=>{
                    return  <Pizza pizza={pizza}  key={i}></Pizza>
                })
            }
        </div>
    </div>
  )
}

export default Pizzas