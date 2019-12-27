import React, { useEffect,useState } from 'react';
import './Toolbar.css'



const Toolbar = props => {
    const [show, setShow] = useState(false)
    const handleScroll = (e)=>{
        console.log("the y is ", window.scrollY)
        console.log("the delta", e.deltaY)

        if(window.scrollY > 150){
            setShow(true)
        }else{
            setShow(false)
        }
    }
    useEffect(()=>{
     //this will be anything that changes the UI 
     // example fetching remote data or accessing window

     window.addEventListener("wheel",handleScroll)
    
     return ()=>{
         window.removeEventListener("wheel")
     }
    },[])
    return (
        <div className={`toolbar ${show?'toolbar_scroll':''}`}>
            <div className="container">
                <nav className="navigations">
                    <div className="logo">
                       <a href="/">YoungGeeks</a>
                    </div>
                    <div className="flex_one" />
                    <div className="navs">
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
                        <div className="nav_separator">
                            <li>
                               <a href="/" className="nav_btn">Log In</a>
                            </li>
                            <li>
                               <a href="/" className="nav_btn">14 Days Free Trial</a>
                            </li>
                        </div>
                    </ul>
                </div>
                <div>
                    <button className="button" onClick={props.onDrawerClick}>
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
                </nav>
            </div>
        </div>
    )
}

export default Toolbar