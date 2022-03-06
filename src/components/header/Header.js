import { HeaderStyle } from './style.js'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll'
import Button from './Button'
import logo from '../../assets/logo1.png'
import React from 'react'




class Header extends React.Component {
    constructor() {
      super()
      this.state = {
        scrollPosition: 0,
        display: false,
        background: '',
        toggle: 'translateX(100%)',
        line1: '',
        line2: '1',
        line3: '',
        transit: 0,
      }
    }
  
    /* This section controls the NavBar fade on Scroll*/
    checkScroll = (event) => {
      this.setState(
        {
          scrollPosition: window.pageYOffset,
        },
        this.scrollAction
      )
    }
  
    scrollAction = () => {
      if (this.state.scrollPosition > 50) {
        this.setState({
          background: '#0D0D0D',
        })
      } else {
        this.setState({
          background: 'transparent',
        })
      }
    }
    /* The above section controls the NavBar fade on Scroll*/
  
    /*  Code below controls the Hamburger Menu Button */
  
    onClickButton = () => {
      this.setState(
        (prevState) => ({
          display: !prevState.display,
        }),
        this.change
      )
    }
  
    onClickBackdrop = () => {
      this.setState({
        display: false,
        toggle: 'translateX(100%)',
        line1: '',
        line2: '1',
        line3: '',
      })
    }
  
    change = () => {
      if (this.state.display === true) {
        this.setState({
          toggle: 'translateX(0%)',
          line1: 'rotate(-45deg) translate(-4px,6px)',
          line2: '0',
          line3: 'rotate(45deg) translate(-4px,-6px)',
        })
      } else {
        this.setState({
          toggle: 'translateX(100%)',
          line1: '',
          line2: '1',
          line3: '',
        })
      }
    }
  
    /*  Code above controls the Hamburger Menu Button */
  
    render() {
      const styleContain = {}
      window.onscroll = () => this.checkScroll()
  
      return (
        <HeaderStyle
          transform={this.state.toggle}
          display={this.state.displayBackdrop}
        >
          {this.state.display ? (
            <div onClick={this.onClickBackdrop} className='backdrop'></div>
          ) : null}
          <div
            style={{ ...styleContain, backgroundColor: this.state.background }}
            className='container'
          >
            <div className='logo'>
              <NavLink to='/'>
                <img src={logo} alt='Logo here' />
              </NavLink>
            </div>
            <div className='nav_items'>
              <NavLink to='/' className='single_item'>
                Home<span></span>
              </NavLink>
              <Link
                className='single_item'
                to='campaign'
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={500}
                isDynamic={true}
                ignoreCancelEvents={false}
                spyThrottle={500}
              >
                About Us <span></span>
              </Link>
           
      
  
              <NavLink to='/stories' className='single_item'>
                Stories<span></span>
              </NavLink>
              <NavLink to='/stories' className='single_item'>
                Contact<span></span>
              </NavLink>
  
               
  
              
  
              <a
                href='https://discord.gg/fJg5zdr3r6'
                target='_blank'
                rel='noopener noreferrer'
                className='discord'
              >
                <button>Sign Up</button>
              </a>
            </div>
  
            {/*Navigation on Mobile */}
  
            <div className='nav_items_mobile'>
              <NavLink
                to='/'
                className='single_item'
                onClick={this.onClickBackdrop}
              >
                HOME
              </NavLink>
              <Link
                className='single_item'
                to='campaign'
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={500}
                delay={100}
                isDynamic={true}
                ignoreCancelEvents={false}
                spyThrottle={500}
                onClick={this.onClickBackdrop}
              >
                ABOUT US
              </Link>
              <Link
                className='single_item'
                to='archive'
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={500}
                delay={100}
                isDynamic={true}
                ignoreCancelEvents={false}
                spyThrottle={500}
                onClick={this.onClickBackdrop}
              >
                STORIES
              </Link>
  
              <NavLink
                to='/faq'
                className='single_item'
                onClick={this.onClickBackdrop}
              >
                CONTACT
              </NavLink>
  
              <NavLink
                to='/buy'
                className='single_item'
                onClick={this.onClickBackdrop}
              >
               LOG IN
              </NavLink>
  
              <NavLink
                to='/hierachy'
                className='single_item'
                onClick={this.onClickBackdrop}
              >
               SIGN UP
              </NavLink>
  
              <a
                href='https://discord.gg/fJg5zdr3r6'
                target='_blank'
                rel='noopener noreferrer'
                className='discord'
              >
                
              </a>
            </div>
          </div>
  
          <Button
            onClick={this.onClickButton}
            line1={this.state.line1}
            line2={this.state.line2}
            line3={this.state.line3}
          />
        </HeaderStyle>
      )
    }
  }
  export default Header
