import React from 'react'; 
import './Form.css'

const Form = props => (
   <section className="subscribe">
      <form className="form">
        <h2>Let's make this work, Request for Demo</h2>
        <p>Start Your 14-days Free Trial. No Credit card Required.</p>
        <input  
          type="text" 
          placeholder="Your work email" />
        <button type="submit" className="submit_btn">Start my Free Trial</button>
      </form>
   </section> 
)

export default Form