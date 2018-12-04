import React, { Component } from 'react';
import './About.css';
import SocialLogo from 'social-logos';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const styles = {
    name: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        position: 'relative',
        overflow: 'auto'
    },
    // buttons: {
    //     display: 'flex',
    //     flexDirection: 'column',
    //     justifyContent: 'center',
    //     paddingRight: '1%',
    //     position: 'sticky'
    // },
}

class About extends Component {
    render() {
        return (
            <div className="About">
                <div
                    data-aos="fade-up"
                    data-aos-delay="50"
                    data-aos-duration="2000"
                    data-aos-easing="ease-in-out"
                    style={styles.name}>
                    <p style={{
                        fontWeight: 700,
                        color: 'slategray',
                        fontSize: 42,
                        textAlign: 'center',
                        marginBottom: '1%'
                    }}>About <span style={{ fontWeight: 400, color: '#998877' }}>me</span></p>
                    <hr />
                    <p
                        className='font-effect-3d-float'
                        style={{
                            color: '#778899',
                            fontStyle: 'italic',
                            fontSize: 32,
                            textAlign: 'center',
                            padding: '25px 100px',
                        }}
                    >
                        With a strong pursuit of creating something from nothing, the transition from a background in film and media was seamless to building web and mobile based applications efficiently.
                    </p>
                    <br />
                    <div
                        data-aos="fade-right"
                        data-aos-delay="50"
                        data-aos-duration="2000"
                        data-aos-easing="ease-in-out"
                        style={{
                            justifyContent: 'center',
                            alignSelf: 'flex-end',
                            width: '100vw',
                            position: 'absolute',
                            overflow: 'auto',
                            display: 'flex',
                            paddingRight: '2%',
                            marginBottom: 100
                        }}>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default About;