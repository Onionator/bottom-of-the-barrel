import React from 'react'

export default function AgeGate() {
  const buttonStyle = {
    borderRadius: '30px',
    fontSize: '36px',
    fontWeight: 'bold',
    margin: '15px 15px 15px 15px',
    padding: '10px',
    width: '100px',
  }
  return(
    <div>
      <h1>Are you over 21?</h1>
      <button style={buttonStyle} >Yes</button>
      <button style={buttonStyle} >No</button>
    </div>
  );
}
