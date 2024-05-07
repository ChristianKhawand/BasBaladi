import React, { useRef, useEffect, useState } from "react";
import './Speciality.css';

const Speciality = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const section = sectionRef.current;
        const handleScroll = () => {
            if (section) {
                const sectionTop = section.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                setIsVisible(sectionTop < windowHeight);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial visibility
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section ref={sectionRef} className={`section ${isVisible ? 'visible' : ''}`}>
            <div class="element">
        <i class="fas fa-truck fa-3x mb-3 element__icon"></i>
        <div class="element__content">
            <div class="element__title">Delivery</div>
            <div class="element__description">All over Lebanon</div>
        </div>
    </div>

    <div class="element">
        <i class="fas fa-handshake fa-3x mb-3 element__icon"></i>
        <div class="element__content">
            <div class="element__title">Trusted</div>
            <div class="element__description">Most trusted in Lebanon</div>
        </div>
    </div>

    <div class="element">
        <i class="fas fa-leaf fa-3x mb-3 element__icon" ></i>
        <div class="element__content">
            <div class="element__title">Organic</div>
            <div class="element__description">The best products only</div>
        </div>
    </div>
        </section>
    );
}

export default Speciality;

    