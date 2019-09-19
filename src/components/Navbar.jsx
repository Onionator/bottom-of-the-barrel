import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  const navbarStyle = {
    borderBottom: '4px solid #A1988F',
    padding: '15px',
    textAlign: 'center',
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
  return (
    <div style={navbarStyle}>
      <Link to='/' style={anchorStyle}>Home</Link>
      <a style={anchorStyle} onClick={() => props.onDisplayForm()} >Add Keg</a>
      <a href='/' style={anchorStyle}>Login</a>
      <a href='/' style={anchorStyle}>Sign Up</a>
    </div>
  )
}

Navbar.propTypes = {
  onDisplayForm: PropTypes.func
}
