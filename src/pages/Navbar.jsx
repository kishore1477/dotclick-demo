import React from 'react'

const Navbar = () => {
  return (


<nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">

      <a className="navbar-brand" href="#">   <img src='./logo.PNG'/>
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
     
  
      <div className="collapse navbar-collapse  d-flex justify-content-start align-item-start justify-content-lg-end align-item-lg-end" id="navbarSupportedContent">


<ul className="navbar-nav mr-auto d-flex justify-content-end align-item-end gap-5 ">
       
       <li className='nav-item pt-2 cursor-pointer text-uppercase'>About</li>
                <li className=' nav-item btn  btn-outline-warning px-4 text-uppercase'>
                Leader Board
                </li>
                <li className=' nav-item btn btn-dark text-uppercase px-4'>
                Get Started
                </li>
     </ul>
     

     
    </div>
  
    </div>
  </div>
</nav>

  )
}

export default Navbar