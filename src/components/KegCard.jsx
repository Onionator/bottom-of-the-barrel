import React from 'react'
import PropTypes from 'prop-types'
import keg from '../public/keg.png'

export default function KegCard(props) {
  const kegStyles = {
    width: '300px',
  }
  return(
    <div style={kegStyles}>
      <img alt="keg card image" src={keg} />
      <h2>{props.name}</h2>
      <p>{props.brand}</p>
      <p>{props.pintsLeft}</p>
      <p>${props.price}</p>
      <p>Alcohol {props.alcoholContent}%</p>
    </div>
  )
}

kegCard.propTypes = {
  name: propTypes.name,
  brand: propTypes.brand,
  price: propTypes.price,
  pintsLeft: propTypes.pintsLeft,
  alcoholContent: propTypes.alcoholContent
}
