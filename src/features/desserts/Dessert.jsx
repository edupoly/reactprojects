import React from 'react'

function Dessert({dessert}) {
  return (
    <div className='w-25 p-2 d-flex flex-column justify-content-between'>
        <div>
        <img src={dessert.img} className='rounded w-100' alt="" />
        <p>
            <b>{dessert.name}</b>
            <br />
            { dessert.veg && <i className="bi bi-record-btn-fill text-success"></i>}
            { !dessert.veg && <i className="bi bi-record-btn-fill text-danger"></i>}
        </p>
        <p>
            {dessert.description}
        </p>
        </div>
    </div>
  )
}

export default Dessert