import React from 'react'

const Footer = () => {
    return (
        <footer className="section-p1">
            <div className="col">
                <img className="logo" src="logo-website.png" alt="" />
                <h4>Contact</h4>
                <p><strong>Address:</strong> Belgavi, Karnataka</p>
                <p><strong>Phone:</strong> (+91) 9739750841</p>
                <p><strong>Hours:</strong> 09:00 - 18:00, Mon - Sun</p>
                <div className="follow">
                    <h4>Follow us</h4>
                    <div className="icon">
                        <i className='bx bxl-facebook'></i>
                        <i className='bx bxl-twitter'></i>
                        <i className='bx bxl-instagram'></i>
                        <i className='bx bxl-pinterest-alt'></i>
                        <i className='bx bxl-youtube'></i>
                    </div>
                </div>
            </div>

            <div className="col">
                <h4>About</h4>
                <a >About us</a>
                <a >Delivery Information</a>
                <a >Privacy Policy</a>
                <a >Terms & Conditions</a>
                <a >Contact Us</a>
            </div>

            <div className="col">
                <h4>My Account</h4>
                <a >Sign In</a>
                <a >View Cart</a>
                <a >My Wishlist</a>
                <a >Track My Order</a>
                <a >Help</a>
            </div>

            <div className="col install">
                <h4>Install App</h4>
                <p>From App Store or Google Play</p>
                <div className="row">
                    <img src="http://127.0.0.1:5502/img/pay/app.jpg" alt="" />
                    <img src="http://127.0.0.1:5502/img/pay/play.jpg" alt="" />
                </div>
                <p>Secured Payment Gateways</p>
                <img src="http://127.0.0.1:5502/img/pay/pay.png" alt="" />
            </div>

            <div className="copyright">
                <p>© 2025, infinex-products - Ecommerce Website</p>
            </div>
        </footer>
    )
}

export default Footer
