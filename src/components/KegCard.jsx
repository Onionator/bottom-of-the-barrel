import React from 'react'
import PropTypes from 'prop-types'
import keg from '../public/keg.png'

export default function KegCard(props) {

  const kegStyles = {
    backgroundImage: `url( ${keg} )`,
    backgroundSize: 'cover',
    position: 'relative',
    backgroundSize: 'auto 100%',
    backgroundRepeat: 'no-repeat',
  }
  const infoStyle = {
    color: '#120C05',
    fontSize: '20px',
    margin: '60px',
    marginBottom: '25px',
    paddingTop: '10px',
    paddingBottom: '30px',
    textAlign: 'center',
  }
  const buttonStyle = {
    backgroundColor: '#CB9E7C',
    border: '1px solid #120C05',
    borderRadius: '50px',
    olor: '#120C05',
    fontSize: '20px'
  }

  // function handleSellPintInKegCard(event) {
  //   event.preventDefault();
  //   props.onSellPint({name: name.value, brand: brand.value, price: price.value, pintsLeft: pintsLeft.value, alcoholContent: alcoholContent.value - 1})
  // }

  return(
    <div style={kegStyles}>
      <div className={props.name} style={infoStyle}>
        <h2>{props.name}</h2>
        <p>Made by {props.brand}</p>
        <p>{stillFull(props.pintsLeft)}</p>
        <p>{props.price}</p>
        <p>Alcohol {props.alcoholContent}%</p>
      </div>
    </div>
  )
}

KegCard.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  pintsLeft: PropTypes.number,
  alcoholContent: PropTypes.number
  // onSellPint: PropTypes.func,
  // onEditKeg: PropTypes.func
}

function stillFull(pintsLeft) {
  if (pintsLeft > 10) {
    return <h1 style={{color: '#1C7220'}}>{pintsLeft}</h1>
  } else {
    return <h1 style={{color: 'red'}}>{pintsLeft}</h1>
  }
}

// <button onClick={() => props.onSellPint()} style={buttonStyle} >Sell</button>
// <button style={buttonStyle} onClick={() => props.onEditKeg()} >Edit</button>
