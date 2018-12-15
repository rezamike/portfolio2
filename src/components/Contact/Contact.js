import React, { Component } from 'react';
import './Contact.css';
import SocialLogo from 'social-logos';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as emailjs from 'emailjs-com';

library.add(faChevronUp)

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
        const { name, value } = event.target
        this.setState({
            [name]: value
        });
    }

    handleSubmit = event => {
        event.preventDefault();


        emailjs.sendForm('gmail', 'template_tO3QTbtT', '.submitForm', 'user_N23hHxzdBLrH7QCwtoTGj')
            .then((response) => {
                alert("Your email has been sent over! I'll take a look and get back to you soon!");
            }, (err) => {
                console.log('FAILED...', err);
            });
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
                <div className='nameC'>
                    <p className='font-effect-3d-float titleC'>
                        Let's work together!
                    
                    <div className='buttonsC'>
                        <SocialLogo onClick={() => { window.open('https://github.com/rezamike') }} className='social' size={36} icon='github' />
                        <SocialLogo onClick={() => { window.open('https://www.linkedin.com/in/michael-r-sanaiha/') }} className='social' size={36} icon='linkedin' />
                        <SocialLogo onClick={() => { window.open('https://www.instagram.com/rezamike/') }} className='social' size={36} icon='instagram' />
                    </div>
                    </p>
                    <div className='formC'>
                        <form className='submitForm' onSubmit={this.handleSubmit}>
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
          <textarea className='bigBox'
                                    rows="5"
                                    cols="80"
                                    type="text"
                                    name='message'
                                    value={this.state.message}
                                    onChange={this.handleChange} />
                            </label>
                            <input className='submit' type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
                <div className='upC upperC'>
                    <p button onClick={this.scrollToTop} className='upButtonC'><FontAwesomeIcon icon='chevron-up' /></p>
                </div>
            </div>
        );
    }
}

export default Contact;