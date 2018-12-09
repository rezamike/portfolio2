import React, { Component } from 'react';
import './Services.css';
import SocialLogo from 'social-logos';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab)

const styles = {
    name: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        position: 'relative',
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
                    <p style={{
                        fontWeight: 700,
                        color: '#998877',
                        fontSize: 42,
                        textAlign: 'center',
                        marginBottom: '1%',
                        textShadow: '0 1px 0 rgba(255, 255, 255, 0.4)'
                    }}>Service<span style={{ fontWeight: 400, color: '#778899' }}>s</span></p>
                    <hr />
                    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <img className='stacks' src='/assets/svg/html5.svg' />
                        <img className='stacks' src='/assets/svg/css3.svg' />
                        <img className='stacks' src='/assets/svg/javascript.svg' />
                        <img className='stacks' src='/assets/svg/ajax.svg' />
                        <img className='stacks' src='/assets/svg/bootstrap.svg' />
                        <img className='stacks' src='/assets/svg/jquery.svg' />
                        <img className='stacks' src='/assets/svg/git.svg' />
                        <img className='stacks' src='/assets/svg/express.svg' />
                        <img className='stacks' src='/assets/svg/nodejs.svg' />
                        <img className='stacks' src='/assets/svg/mysql-official.svg' />
                        <img className='stacks' src='/assets/svg/mongodb.svg' />
                        <img className='stacks' src='/assets/svg/react.svg' />
                        <img className='stacks' src='/assets/svg/yarn.svg' />
                        <img className='stacks' src='/assets/svg/npm.svg' />



                    </div>
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