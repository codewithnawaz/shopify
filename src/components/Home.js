import React from 'react'
import Products from './Products'

const Home = () => {
    return (
        <div className='hero'>
            <div className="card text-bg-dark ">
                <img src="https://img.freepik.com/free-photo/shopping-concept-close-up-portrait-young-beautiful-attractive-redhair-girl-smiling-looking-camera_1258-116839.jpg?w=1380&t=st=1671457458~exp=1671458058~hmac=3e779c767a0f8440e91a550b962def08ae66744ace1900ccf928aaa3d89e3dae"
                    className="card-img" alt="background" height="600px" />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                        <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                        <p className="card-text lead fs-2">CHECKOUT ALL THE TRENDS</p>
                    </div>
                </div>
            </div>
            <Products />
        </div>
    )
}

export default Home