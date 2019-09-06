import React from 'react'
import banner from '../public/banner.jpeg'
import Navbar from './Navbar.jsx'
import { Link } from 'react-router-dom';

export default function Header() {
  const headerStyle = {
    // backgroundColor: '#2C2922',
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
  const navbarStyle = {
    margin: '0',
  }
  const imgContainerStyle = {
    verticalAlign: 'bottom',
  }
  return (
    <div style={headerStyle}>
      <div style={imgContainerStyle}>
        <img alt="image of barrels" src={banner} style={bannerStyle} />
        <h1 style={h1Style}>Bottom of the Barrel Tap Room</h1>
      </div>
      <Navbar style={navbarStyle}/>
    </div>
  )
}
