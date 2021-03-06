import React, { Component } from 'react';
import './Works.css';
import SocialLogo from 'social-logos';

class Works extends Component {
    render() {
        return (
            <div className="Works">
                <div
                    data-aos="fade-up"
                    data-aos-delay="50"
                    data-aos-duration="2000"
                    data-aos-easing="ease-in-out"
                    className='nameW'>
                    <p className='titleW'>Work<span className='standAloneW'>s</span></p>
                    <hr /> 
                    <div style={{ padding: '0 8% 3% 8%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '1%'}}>
                        <p className='projects' onClick={() => { window.open('http://myagility.herokuapp.com/') }}>.agility</p>
                        <p className='projects' onClick={() => { window.open('https://lighthouse-project2.herokuapp.com/') }}>lightHouse</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Works;