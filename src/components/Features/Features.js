import React from 'react';
import Image from '../../Assets/img/mob-home-screen-2.png';

import './Features.css'

const Features = props => (
    <section className="features">
        <div className="container">
            <div className="features_wrapper">
                <div className="feature_cont_img">
                    <img src={Image} alt="Feature" />
                </div>
                <div className="feature_content">
                    <h4>Features</h4>
                    <h2>Set a target goal for how many email subscribers you'd like to reach every month</h2>
                    <div className="feature_cont_items">
                        <div className="cont_item">
                            <h3><i class="fas fa-check"></i> Manage Lists</h3>
                            <p>Deepest, truest and soundbite-iest are considered</p>
                        </div>
                        <div className="cont_item">
                            <h3><i class="fas fa-check"></i> Create Mailings</h3>
                            <p>Deepest, truest and soundbite-iest are considered</p>
                        </div>
                    </div>    
                    <div className="feature_cont_items">    
                        <div className="cont_item">
                            <h3><i class="fas fa-check"></i> Delivery</h3>
                            <p>Deepest, truest and soundbite-iest are considered</p>
                        </div>
                        <div className="cont_item">
                            <h3><i class="fas fa-check"></i> Reporting</h3>
                            <p>Deepest, truest and soundbite-iest are considered</p>
                        </div>
                    </div>
                    <button className="feature_btn">Start my Free Tral</button>
                </div>
            </div>
        </div>
    </section>
)

export default Features