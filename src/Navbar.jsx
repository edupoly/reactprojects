import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='sticky-top'>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <h1 style={{fontFamily: "Sankofa Display"}}>
                        <img src="/pizzalogo.png" alt="" style={{width:"100px"}}/>
                        PolyPizzas
                    </h1>
                </Link>
                <div className='d-flex d-lg-none'>
                    <Link className="nav-link mx-2" to="/pizzas"><button className=' btn btn-warning'>Pizzas</button></Link>
                    <Link className="nav-link mx-2" to="/desserts"><button className=' btn btn-danger'>Desserts</button></Link>
                </div>
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> */}
                {/* <span className="navbar-toggler-icon"></span> */}
                {/* <li className="nav-item btn btn-danger m-2">
                    <Link className="nav-link active text-light " aria-current="page" to="/pizzas">Pizzas</Link>
                    </li>
                    <li className="nav-item  btn btn-info m-2">
                    <Link className="nav-link" to="/desserts">Desserts</Link>
                    </li> */}
                {/* </button> */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item btn btn-danger m-2">
                        <Link className="nav-link active text-light " aria-current="page" to="/pizzas">Pizzas</Link>
                        </li>
                        <li className="nav-item  btn btn-info m-2">
                        <Link className="nav-link" to="/desserts">Desserts</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>

            </div>
            </nav>
    </div>
  )
}

export default Navbar