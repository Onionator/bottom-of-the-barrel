import React from 'react'
import PropTypes from 'prop-types'

export default function AgeGate(props) {
  const buttonStyle = {
    borderRadius: '30px',
    fontSize: '36px',
    fontWeight: 'bold',
    margin: '15px',
    padding: '10px',
    width: '100px',
  }
  return(
    <div>
      <h1>Are you over 21?</h1>
      <button style={buttonStyle} onClick={() => props.onAgeGateClickYes()} >Yes</button>
      <button style={buttonStyle} onClick={() => props.onAgeGateClickNo()} >No</button>
    </div>
  );
}

AgeGate.propTypes = {
  onAgeGateClickYes: PropTypes.func,
  onAgeGateClickNo: PropTypes.func
}
