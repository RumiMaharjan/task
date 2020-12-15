import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import "../styles/Navbar.css";

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const closeMobileMenu=()=> setClick(false);
     const handleClick=()=>setClick(!click); 

     const showButton = ()=>{
         if(window.innerWidth <= 960){
             setButton(false);
         }else{
             setButton(true);
         }
     };

     useEffect(()=>{
         showButton();
     },[]);
  
     window.addEventListener('resize', showButton);
    return (
        <>
        <nav classname="navbar">
            <div className="navbar-container" style={{backgroundColor:'black'}}>
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}> 
                TRVL <i className="fab fa-typo3"/>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times': 'fas fa-bars'}/>
                </div>
                <ul className={click? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                            Services
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                            Products
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                </ul> 
                {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}

            </div>
        </nav>
        </>
    )
}

export default Navbar;

 
//expo install react-router-dom