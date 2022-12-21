import React from 'react'

const Contact = () => {
    return (
        <div className="container2 d-flex mt-5">
            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448196.0531427956!2d76.81303823507241!3d28.643795373170963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1671650943824!5m2!1sen!2sin"
                    width={400}
                    height={300}
                    
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">

                </iframe>
            </div>
            <div className="desc py-4 px-5">
                <h3>Address:</h3>
                <p>Shopify.com</p>
                <p>Tower 22,pheonix lane</p>
                <p>California, U.S</p>
                <p>Phone:1232452</p>
                <i className="fa fa-facebook fs-2 me-3"></i>
                <i className="fa fa-youtube fs-2 me-3"></i>
                <i className="fa fa-twitter fs-2 me-3"></i>
                <i className="fa fa-instagram fs-2 "></i>
            </div>
        </div>
    )
}

export default Contact
{/* <div className="heading px-2 my-3 bg-light fw-bold fs-1 text-center justify-content-center">Contact Us</div>
            <div className="maps d-flex">
                <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224099.44456124087!2d77.27145986280814!3d28.64364923298357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1671564126725!5m2!1sen!2sin"
                        width={600}
                        height={450}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
                <div className="desc px-5 text-align-center">
                    <h3>Address:</h3>
                    <p>Shopify.com</p>
                    <p>Tower 22,pheonix lane</p>
                    <p>California, U.S</p>
                    <p>Phone:1232452</p>
                    <div className="icons my-5">
                    <i className="fa fa-facebook fs-2 me-3"></i>
                    <i className="fa fa-youtube fs-2 me-3"></i>
                    <i className="fa fa-twitter fs-2 me-3"></i>
                    <i className="fa fa-instagram fs-2 "></i>
                    </div>
                </div>
            </div> */}
