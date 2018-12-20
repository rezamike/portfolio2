import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Works from './components/Works/Works';
import Contact from './components/Contact/Contact';
import { Link, Element, Events, animateScroll as scroll, scroller } from 'react-scroll';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Route } from "react-router-dom";

library.add(faBars, faTimes, faChevronDown)

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      windowWidth: window.innerWidth,
      navVisible: false
    };

    this.scrollToTop = this.scrollToTop.bind(this);
  }

  handleResize() {
    this.setState({ windowWidth: window.innerWidth });
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', function () {
    });
    Events.scrollEvent.register('end', function () {
    });

    window.addEventListener('resize', this.handleResize.bind(this));
  }

  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  scrollToWithContainer() {
    let goToContainer = new Promise((resolve, reject) => {

      Events.scrollEvent.register('end', () => {
        resolve();
        Events.scrollEvent.remove('end');
      });

      scroller.scrollTo('scroll-container', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });
    });

    goToContainer.then(() =>
      scroller.scrollTo('scroll-container-second-element', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        containerId: 'scroll-container'
      }));
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
    window.removeEventListener('resize', this.handleResize.bind(this));
  }

  rendernav() {
    if (this.state.navVisible) {
      return this.navigationLinks();
    }
  }

  handleNavClick() {
    if (!this.state.navVisible) {
      this.setState({ navVisible: true });
    } else {
      this.setState({ navVisible: false });
    }
  }

  navigationLinks() {
    return [
      <ul data-aos="fade-down"
        data-aos-delay="50"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out"
        className='menuBack'>
        <li key={1}><Link
          className='font-effect-3d-float'
          activeClass="active"
          className="aboutScroll"
          to="aboutScroll"
          spy={true}
          smooth={true}
          duration={600}
        >About
            </Link></li>
        <li key={2}><Link
          className='font-effect-3d-float'
          activeClass="active"
          className="servicesScroll"
          to="servicesScroll"
          spy={true}
          smooth={true}
          duration={600}
        >Services
            </Link></li>
        <li key={3}><Link
          className='font-effect-3d-float'
          activeClass="active"
          className="worksScroll"
          to="worksScroll"
          spy={true}
          smooth={true}
          duration={600}
        >Works
            </Link></li>
        {/* <li key={4}><Link
          className='font-effect-3d-float'
          activeClass="active"
          className="clientsScroll"
          to="clientsScroll"
          spy={true}
          smooth={true}
          duration={600}
        >Clients
            </Link></li> */}
        <li key={4}><Link
          className='font-effect-3d-float'
          activeClass="active"
          className="contactScroll"
          to="contactScroll"
          spy={true}
          smooth={true}
          duration={600}
        >Contact
            </Link></li>
      </ul>
    ];
  }

  renderNavigation() {
    return [
      <div className="mobile_nav">
        <p className='navButton' data-aos="fade-down-up"
          data-aos-delay="50"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out" onClick={this.handleNavClick.bind(this)}>{this.state.navVisible ? <FontAwesomeIcon icon='times' /> : <FontAwesomeIcon icon='bars' />}</p>
        {this.rendernav()}
      </div>
    ];
  }


  render() {
    return (
      <Router>
        <div className="App">
          <div className='nameApp'>
            {this.renderNavigation()}
          </div>
          <div style={{ position: 'relative' }}>
            <Route exact path="/" component={Home} />
            <Element name="aboutScroll" className="element" ><About /></Element>
            <Element name="servicesScroll" className="element"><Services /></Element>
            <Element name="worksScroll" className="element"><Works /></Element>
            {/* <Element name="clientsScroll" className="element"><Clients /></Element> */}
            <Element name="contactScroll" className="element"><Contact /></Element>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
