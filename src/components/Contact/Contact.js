import React, { Component } from 'react';
import './Contact.css';
import SocialLogo from 'social-logos';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faChevronUp)

const styles = {
    name: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100vw',
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
    upper: {
        position: 'absolute',
        display: 'flex',
        alignSelf: 'flex-start',
        width: '100vw',
        // paddingRight: '2%',
    }
}

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            message: ''
        }

        this.scrollToTop = this.scrollToTop.bind(this);
    }

    handleChange = event => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        });
    }

    handleSubmit = event => {
        console.log(this.state.name, this.state.email, this.state.message);
        event.preventDefault();
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
            <div className="Contact">
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
                        Let's work together!
                    </p>
                    <div className='form'>
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                Name:
          <input type="text" name='name' value={this.state.name} onChange={this.handleChange} />
                            </label>
                            <label>
                                Email:
          <input type="text" name='email' value={this.state.email} onChange={this.handleChange} />
                            </label>
                            <label>
                                Message:
          <input style={{ width: 150, height: 100 }} type="text" name='message' value={this.state.message} onChange={this.handleChange} />
                            </label>
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>

                <div style={styles.buttons}>
                    <SocialLogo onClick={() => { window.open('https://github.com/rezamike') }} className='social' size={36} icon='github' />
                    <SocialLogo onClick={() => { window.open('https://www.linkedin.com/in/michael-r-sanaiha/') }} className='social' size={36} icon='linkedin' />
                    <SocialLogo onClick={() => { window.open('https://www.instagram.com/rezamike/') }} className='social' size={36} icon='instagram' />
                </div>
                <div style={styles.upper} className='up'>
                    <p button onClick={this.scrollToTop} className='upButton'><FontAwesomeIcon icon='chevron-up' /></p>
                </div>
            </div>
        );
    }
}

export default Contact;