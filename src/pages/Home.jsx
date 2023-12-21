import React from 'react'

const Home = () => {
    return (
        <div className='mt-4' >
{/* style={{ paddingTop: "80px" }} */}
            <div className='row '>
            {/* style={{ paddingRight:"224px",paddingTop:"100px"}} */}
                <div className=' col-lg-6  pt-4 pr-4' >
                    <h1 className='text-uppercase fs-1 fw-bold '>
                        Your way
                    </h1>
                    <p >
                        Your desnitation, to join us on this exciting  adventure  toward friendlier  financial  for our entire community
                    </p>
                    <button className='btn btn-warning border border-dark text-uppercase ' style={{ paddingLeft: "24px", paddingRight: "24px" }}>
                        Get Started
                    </button>
                </div>
                <div className='col col-lg-6  my-4 my-lg-0 mt-4' >
                    <div className='d-flex justify-content-center align-item-center justify-content-lg-end align-item-lg-end'  >

                        <img src='./homeImg.PNG' alt='home Image' className='w-75' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home