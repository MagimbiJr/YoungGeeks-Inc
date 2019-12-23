import React from 'react';

import './Footer.css'

const Footer = props => (
    <section className="footer">
        <div className="container">
            <div className="footer-wrapper">
                <div className="footer_item info">
                    <a href="/" className="footer_logo">YoungGeeks</a>
                    <ul className="social_info">
                        <li>
                            <a href="https://web.facebook.com/atanasi.charle"><i className="fab fa-facebook-f"></i></a>
                        </li>
                        <li>
                            <a href="https://twitter.com/MagimbiJr"><i className="fab fa-twitter"></i></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/magimbijr/"><i className="fab fa-instagram"></i></a>
                        </li>
                        <li>
                            <a href="https://github.com/MagimbiJr/YoungGeeks-Inc"><i className="fab fa-github"></i></a>
                        </li>
                    </ul>
                    <p>&copy;2019 YoungGeeks Inc, All Rights Reserved</p>
                </div>
                <div className="footer_item product">
                    <h3>Product</h3>
                    <ul>
                        <li>
                            <a href="/">Features</a>
                        </li>
                        <li>
                            <a href="/">Templates</a>
                        </li>
                        <li>
                            <a href="/">Solutions</a>
                        </li>
                        <li>
                            <a href="/">Pricing</a>
                        </li>
                    </ul>
                </div>
                <div className="footer_item support">
                    <h3>Support</h3>
                    <ul>
                        <li>
                            <a href="/">Help center</a>
                        </li>
                        <li>
                            <a href="/">Support</a>
                        </li>
                        <li>
                            <a href="/">Security</a>
                        </li>
                        <li>
                            <a href="/">Terms of Services</a>
                        </li>
                    </ul>
                </div>
                <div className="footer_item contacts">
                    <h3>Contact Us</h3>
                    <ul>
                        <li><i class="fas fa-phone"></i>+255(0)718 38 3894</li>
                        <li><i class="fab fa-whatsapp"></i>+255(0)718 38 3894</li>
                        <li><i class="fas fa-envelope"></i>charleatanasi@gmail.com</li>
                        <li><i class="fas fa-map-marker-alt"></i>YoungGeeks House, Vingunguti, Ilala, Dar es salaam</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
)

export default Footer