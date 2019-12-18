import React from 'react';
import './Content.css';

const Content = props => (
    <div className="content">
        <h1>Customer loyalty is mostly about choosing the right customers</h1>
        <p>Feel free to let your own digital marketing efforts be inspired, and tell me if you would like to nominate.</p>
        <form className="form">
            <input 
               value={props.value} 
               type="text" 
               placeholder="Your work email" />
            <button type="submit" className="submit_btn">Start my Free Trial</button>
        </form>
        <div className="short_paragraph">
           <p><i class="fas fa-check"></i> 14 Days free tria</p>
           <p><i class="fas fa-check"></i> Easy setup</p>
           <p><i class="fas fa-check"></i> Anytime cancel</p>
        </div>
    </div>
)

export default Content