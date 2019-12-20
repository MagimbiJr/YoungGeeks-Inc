import React from 'react';
import './OurClient.css'

const ourClient = props => (
    <section className="our_client">
        <div className="container">
            <div className="clients">
                <div className="amazon">
                   <i class="fab fa-amazon"></i>
                   <h5>Amazon</h5>
                </div>
                <div className="apple">
                   <i class="fab fa-apple"></i>
                   <h5>Apple Inc</h5>
                </div>
                <div className="google">
                   <i class="fab fa-google"></i>
                   <h5>Google Inc</h5>
                </div>
                <div className="microsoft">
                   <i class="fab fa-microsoft"></i>
                   <h5>Microsoft </h5>
                </div>
            </div>
        </div>
    </section>
)

export default ourClient