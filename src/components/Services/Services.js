import React, { Component } from 'react';
import './Services.css';
import SocialLogo from 'social-logos';

const styles = {
    name: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
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

class Services extends Component {
    render() {
        return (
            <div className="Services">
                <div 
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out"
                style={styles.name}>
                    <p
                        className='font-effect-3d-float'
                        style={{
                            color: '#998877',
                            fontSize: 36,
                            textAlign: 'center',
                            padding: '25px 100px',
                            margin: '25px 100px'
                        }}
                    >
                    Like many others, I was captivated by the creative artistry and technical expertise that I encountered on my television screen as a child. When I held a camera for the first time, I grasped the possibility of what my idols in television and filmmaking had been seeing:  an empowering opportunity to create another world more awesome than my own. This curiosity quickly propagated into a yearning for personal creativity and a resilient passion for filmmaking that could not be easily satisfied.
                    </p>

                </div>
                {/* <div style={styles.buttons}>
                    <SocialLogo onClick={() => {window.open('https://github.com/rezamike')}} className='social' size={ 36 } icon='github'  />
                    <SocialLogo onClick={() => {window.open('https://www.linkedin.com/in/michael-r-sanaiha/')}} className='social' size={ 36 } icon='linkedin'  />
                    <SocialLogo onClick={() => {window.open('https://www.instagram.com/rezamike/')}} className='social' size={ 36 } icon='instagram'  />
                </div> */}
            </div>
        );
    }
}

export default Services;