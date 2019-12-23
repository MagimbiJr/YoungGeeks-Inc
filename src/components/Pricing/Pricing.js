import React from 'react';
import './Pricing.css'

const Pricing = props => (
    <section className="pricing">
        <div className="container">
            <h4>Pricing</h4>
            <h3>Simple Pricing for Everyone</h3>
            <p className="intro_paragraph">Design like you are absolutely right, then optimizing like you were wrong from the start. Relevance is irrelevant once the consumer chooses you.</p>
            <div className="price_plan">
                <p className="price_plan_text">Monthly</p>
                <p className="icon"><i className="fas fa-toggle-on"></i></p>
                <p className="price_plan_text">Yearly</p>
            </div>
            <div className="pricing_wrapper">
                <div className="card">
                    <div className="card_head">
                        <h5>Basic</h5>
                    </div>
                    <div className="card_content">
                        <h2><span>&#36;</span>45</h2>
                        <ul>
                            <li><i class="fas fa-check"></i> Unlimited Tamplates</li>
                            <li><i class="fas fa-check"></i> Marketing Tutorials</li>
                            <li><i class="fas fa-check"></i> Free support for 1 year</li>
                            <li><i class="fas fa-times"></i></li>
                        </ul>
                        <a href="/" className="card_btn">Sign up Now</a>
                    </div>
                </div>    
                <div className="card">
                    <div className="card_head">
                        <h5>Advanced</h5>
                    </div>
                    <div className="card_content">
                        <h2><span>&#36;</span>105</h2>
                        <ul>
                            <li><i class="fas fa-check"></i> Unlimited Tamplates</li>
                            <li><i class="fas fa-check"></i> Marketing Tutorials</li>
                            <li><i class="fas fa-check"></i> Free support for 1 year</li>
                            <li><i class="fas fa-check"></i> Advanced Marketing Tools</li>
                        </ul>
                        <a href="/" className="card_btn">Sign up Now</a>
                    </div>
                </div>
                <div className="card">
                    <div className="card_head">
                        <h5>Pro</h5>
                    </div>
                    <div className="card_content">
                        <h2><span>&#36;</span>75</h2>
                        <ul>
                            <li><i class="fas fa-check"></i> Unlimited Tamplates</li>
                            <li><i class="fas fa-check"></i> Marketing Tutorials</li>
                            <li><i class="fas fa-check"></i> Free support for 1 year</li>
                            <li><i class="fas fa-check"></i> Advanced Marketing Tools</li>
                        </ul>
                        <a href="/" className="card_btn">Sign up Now</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default Pricing