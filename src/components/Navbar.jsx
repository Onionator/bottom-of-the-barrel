import React from 'react'


export default function Navbar() {
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
      <a href='/' style={anchorStyle}>Home</a>
      <a href='/' style={anchorStyle}>All Kegs</a>
      <a href='/' style={anchorStyle}>Login</a>
      <a href='/' style={anchorStyle}>Sign Up</a>
    </div>
  )
}
