import React, { Component } from 'react';
import './About.css';
import SocialLogo from 'social-logos';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

class About extends Component {
    render() {
        return (
            <div className="About">
                <div
                    data-aos="fade-up"
                    data-aos-delay="50"
                    data-aos-duration="2000"
                    data-aos-easing="ease-in-out"
                    className='nameA'>
                    <p className='titleA'>
                        About <span className='standAloneA'>me</span></p>
                    <hr />
                    <p className='font-effect-3d-float mainA'>
                        With a strong pursuit of creating something from nothing, the transition from a background in <span id='filmText' style={{cursor: 'pointer'}} onClick={() => { window.open('http://www.michaelrezasanaiha.com') }}>FILM</span> and media was seamless to building web and mobile based applications efficiently and beautifully.
                    </p>
                    <div
                        data-aos="fade-right"
                        data-aos-delay="50"
                        data-aos-duration="2000"
                        data-aos-easing="ease-in-out"
                        className='secondaryA'>
                        
                        <div className='imageDivA'>
                            <img className='profileImageA' src='/assets/itsmeinasuit copy.jpeg' />
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default About;