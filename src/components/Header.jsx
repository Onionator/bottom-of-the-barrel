import React from 'react'
import banner from '../public/banner.jpeg'
// import Navbar from './Navbar.jsx'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

export default function Header(props) {
  const headerStyle = {
    margin: '0',
  }
  const bannerStyle = {
    margin: '0',
    position: 'relative',
    maxWidth: '100%',
    opacity: '0.6',
    overflow: 'none',
  }
  const h1Style = {
    color: '#CB9E7C',
    fontSize: '8vw',
    position: 'absolute',
    textAlign: 'center',
    position: 'absolute',
    textShadow: '3px 3px #2C2922',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    height: '100%',
    verticalAlign: 'middle',
  }
  const imgContainerStyle = {
    verticalAlign: 'bottom',
  }
  const navbarStyle = {
    borderBottom: '4px solid #A1988F',
    padding: '15px',
    textAlign: 'center',
    margin: '0',
  }
  const anchorStyle = {
    color: '#CB9E7C',
    fontSize: '3vw',
    fontWeight: 'bold',
    marginLeft: '2vw',
    marginRight: '2vw',
    padding: '10px',
    textDecoration: 'none',
  }
  console.log(props)
  return (
    <div style={headerStyle}>
      <div style={imgContainerStyle}>
        <img alt="image of beer" src={banner} style={bannerStyle} />
        <h1 style={h1Style}>Bottom of the Barrel Tap Room</h1>
      </div>
      <div style={navbarStyle}>
        <a style={anchorStyle}>Home</a>
        <button style={anchorStyle} onClick={() => props.onDisplayForm()} >Add Keg</button>
        <a href='/' style={anchorStyle}>Login</a>
        <a href='/' style={anchorStyle}>Sign Up</a>
      </div>
    </div>
  )
}

Header.propTypes = {
  onDisplayForm: PropTypes.func
}
