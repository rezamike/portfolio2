import React, { Component } from 'react';
import './Home.css';
import SocialLogo from 'social-logos';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faChevronDown)

const styles = {
    name: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100vw',
        margin: '1% 1% 1% 2%',
        position: 'relative',
    },
    buttons: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingRight: '1%',
        position: 'sticky'
    },
    downer: {
        position: 'absolute',
        display: 'flex',
        alignSelf: 'flex-end',
        width: '100vw',
        // paddingRight: '2%',
    }
}

class Home extends Component {
    constructor(props) {
        super(props);

        this.scrollToTop = this.scrollToTop.bind(this);
    }

    componentDidMount() {
        Events.scrollEvent.register('begin', function () {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function () {
            console.log("end", arguments);
        });

        scrollSpy.update();
    }

    scrollToTop() {
        scroll.scrollToTop();
    }

    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }

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
                            textAlign: 'left'
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
                    <SocialLogo onClick={() => { window.open('https://github.com/rezamike') }} className='social' size={36} icon='github' />
                    <SocialLogo onClick={() => { window.open('https://www.linkedin.com/in/michael-r-sanaiha/') }} className='social' size={36} icon='linkedin' />
                    <SocialLogo onClick={() => { window.open('https://www.instagram.com/rezamike/') }} className='social' size={36} icon='instagram' />
                </div>
                <div style={styles.downer} className='down'>
                    <p button onClick={() => scroll.scrollTo(650)} className='downButton'><FontAwesomeIcon icon='chevron-down' /></p>
                </div>
            </div>
        );
    }
}

export default Home;