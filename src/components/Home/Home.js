import React, { Component } from 'react';
import './Home.css';
import SocialLogo from 'social-logos';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faChevronDown)

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
                <div className='name'>
                    <p className='font-effect-3d-float intro'>
                        My name is Michael Reza
                        <span className='standAlone'> Sanaiha
                        </span>
                        <br />
                        and I'm more than just a div in the DOM.
                    </p>
                </div>
                <div className='buttons'>
                    <SocialLogo onClick={() => { window.open('https://github.com/rezamike') }} className='social' size={36} icon='github' />
                    <SocialLogo onClick={() => { window.open('https://www.linkedin.com/in/michael-r-sanaiha/') }} className='social' size={36} icon='linkedin' />
                    <SocialLogo onClick={() => { window.open('https://www.instagram.com/rezamike/') }} className='social' size={36} icon='instagram' />
                </div>
                <div className='down downer'>
                    <p button='true' onClick={() => scroll.scrollTo(600)} className='downButton'><FontAwesomeIcon icon='chevron-down' /></p>
                </div>
            </div>
        );
    }
}

export default Home;