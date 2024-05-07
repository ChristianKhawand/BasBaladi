import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        
        <section className="f-wrapper">
            <div className="paddings innerWidth flexCenter f-container">
                
                {/*left section*/}
                
                <div className="flexColStart f-left">
                    <img src='./logo211.png' alt='' width={90} height={55}/>

                    <span className="smalltxt">
                        Our vision is to make all people <br/>
                        happy provider and customers.
                    </span>
                </div>

                <div className="flexColStart f-right">
                    <span className='primaryTexts'>Information</span>
                    <span className='secondarytext'>All over and from LEBANON</span>

                    <div className="flexCenter f-menu">

                        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
                            Home
                        </Link>

                        <a href='/'>About Us</a>
                        

                        <Link to="/products" style={{ color: 'inherit', textDecoration: 'none' }}>
                            Shop
                        </Link>

                        <Link to="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>
                            Contact Us
                        </Link>

                    </div>
                </div>
            </div>
        </section>

    )
}

export default Footer