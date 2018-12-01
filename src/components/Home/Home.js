import React, { Component } from 'react';
import './Home.css';
import SocialLogo from 'social-logos';

const styles = {
    name: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        margin: '1% 1% 1% 2%',
        position: 'relative',
        overflow: 'auto'
    },
    buttons: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingRight: '1%',
        position: 'sticky'
    },
}

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div style={styles.name}>
                    <p
                        className='font-effect-3d-float'
                        style={{
                            color: '#998877',
                            fontWeight: 700,
                            fontSize: 42,
                            paddingLeft: '2%',
                            textAlign: 'center'
                        }}
                    >
                        My name is Michael Reza
                        <span
                            style={{
                                fontWeight: 800,
                                color: 'slategray',
                                fontSize: 48
                            }}
                        > Sanaiha
                        </span>
                        <br />
                        and I'm more than just a div in the DOM.
                    </p>

                </div>
                <div style={styles.buttons}>
                    <SocialLogo onClick={() => {window.open('https://github.com/rezamike')}} className='social' size={ 36 } icon='github'  />
                    <SocialLogo onClick={() => {window.open('https://www.linkedin.com/in/michael-r-sanaiha/')}} className='social' size={ 36 } icon='linkedin'  />
                    <SocialLogo onClick={() => {window.open('https://www.instagram.com/rezamike/')}} className='social' size={ 36 } icon='instagram'  />
                </div>
            </div>
        );
    }
}

export default Home;