import React from "react";
import "./Hero.css"
import { LuShoppingBasket } from "react-icons/lu";
import CountUp from "react-countup";
import {motion} from 'framer-motion';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';



const Hero = () => {
    return (
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container">

                {/*left section*/}

                <div className="flexColStart hero-left">

                    <div className="hero-title">

                        <div className="orange-circle"/>

                        <motion.h1
                            initial={{y: "2rem", opacity: 0}}
                            animate={{y: 0, opacity: 1}}
                            transition={{duration: 3, type: "spring"}}
                        >
                            Discover<br/> 
                            Our Amazing<br/>
                             Product
                        
                        </motion.h1>

                    </div>

                    <div className="flexColStart hero-des">
                        <span className="secondaryText">Look throught our organic product planted <br/></span>
                        <span className="secondaryText">By Agricultures and for your health</span>   
                    </div>

                   <div className="flexCenter search-bar" style={{ borderRadius: '20px' }}>
                        <LuShoppingBasket className="react-icon" />
                        <input type="text" style={{ outline: 'none' }}/>

                        <Link to="/products" style={{ color: 'inherit', textDecoration: 'none' }}>
                            <button className="button">Search</button>
                        </Link>
                    </div>


                    <div className="flexCenter stats">
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={8800} end={9000} duration={4} />
                                <span>+</span>
                            </span>
                            <span className="secondaryText">Premium Products</span>
                        </div>

                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={1950} end={2000} duration={4} />
                                <span>+</span>
                            </span>
                            <span className="secondaryText">Happy Customer</span>
                        </div>

                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={1} end={45} duration={4} />
                                <span>+</span>
                            </span>
                            <span className="secondaryText">Awards</span>
                        </div>

                    </div>

                </div>

                {/*right section*/}

                <div className="FlexCenter hero-right">

                    <motion.div
                        initial={{x: "7rem", opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{duration: 3, type: "spring"}}
                    
                        className="image-container"> 
                            
                            <Carousel fade >

                                <Carousel.Item interval={2000}>
                                    <img src="./seed.jpg" alt="First slide" />
                                    <Carousel.Caption>
                                        
                                    <Link to="/products" style={{ color: 'inherit', textDecoration: 'none' }}>
                                    <button class="button-41" role="button">Seeds</button>
                                    </Link>

                                    <p>Seed no where else</p>
                                    </Carousel.Caption>
                                </Carousel.Item>


                                <Carousel.Item interval={2000}>
                                    <img src="./farmer.jpg" alt="Second slide" />
                                    <Carousel.Caption>

                                    <Link to="/products" style={{ color: 'inherit', textDecoration: 'none' }}>
                                    <button class="button-41" role="button">Farmer</button>
                                    </Link>

                                    <p>Farmers from all lebanon</p>
                                    </Carousel.Caption>
                                </Carousel.Item>


                                <Carousel.Item interval={2000}>
                                    <img src="./cow.jpg" alt="Third slide" />
                                    <Carousel.Caption>
                                    <Link to="/products" style={{ color: 'inherit', textDecoration: 'none' }}>
                                    <button class="button-41" role="button">MEAT</button>
                                    </Link>
                                    
                                    <p>
                                        The best in the town
                                    </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                </Carousel>

                    </motion.div>

                </div>

            </div>
        </section>



      
    )
}

export default Hero;