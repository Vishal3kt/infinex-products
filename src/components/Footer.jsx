import React from 'react'

const Footer = () => {
    return (
        <footer className="section-p1">
            <div className="col">
                <img className="logo" src="../public/logo-website.png" alt="" />
                <h4>Contact</h4>
                <p><strong>Address:</strong> 562 Wellington Road, Street 32, San Francisco</p>
                <p><strong>Phone:</strong> +01 2222 345 / (+91) 0 123 456 789</p>
                <p><strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</p>
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
                <a href="#">About us</a>
                <a href="#">Delivery Information</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Conditions</a>
                <a href="#">Contact Us</a>
            </div>

            <div className="col">
                <h4>My Account</h4>
                <a href="#">Sign In</a>
                <a href="#">View Cart</a>
                <a href="#">My Wishlist</a>
                <a href="#">Track My Order</a>
                <a href="#">Help</a>
            </div>

            <div className="col install">
                <h4>Install App</h4>
                <p>From App Store or Google Play</p>
                <div className="row">
                    <img src="	http://127.0.0.1:5502/img/pay/app.jpg" alt="" />
                    <img src="	http://127.0.0.1:5502/img/pay/play.jpg" alt="" />
                </div>
                <p>Secured Payment Gateways</p>
                <img src="http://127.0.0.1:5502/img/pay/pay.png" alt="" />
            </div>

            <div className="copyright">
                <p>© 2023, Sahad cmd - HTML CSS Ecommerce Template</p>
            </div>
        </footer>
    )
}

export default Footer
