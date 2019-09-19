import React from 'react'
import KegCard from './KegCard.jsx'
import PropTypes from 'prop-types'
import v4 from 'uuid'

// const kegs = [
//   {
//     name: 'Lager',
//     brand: 'Clown',
//     pintsLeft: 100,
//     alcoholContent: 4,
//     price: '$4'
//   },
//   {
//     name: 'IPA',
//     brand: 'Clown',
//     pintsLeft: 72,
//     alcoholContent: 7,
//     price: '$5'
//   },
//   {
//     name: 'Stout',
//     brand: 'Clown',
//     pintsLeft: 33,
//     alcoholContent: 7,
//     price: '$6'
//   },
//   {
//     name: 'Porter',
//     brand: 'Clown',
//     pintsLeft: 124,
//     alcoholContent: 5,
//     price: '$5'
//   },
//   {
//     name: 'Pale Ale',
//     brand: 'Clown',
//     pintsLeft: 6,
//     alcoholContent: 5,
//     price: '$5'
//   },
//   {
//     name: 'Dumbo',
//     brand: 'Clown',
//     pintsLeft: 1,
//     alcoholContent: 9,
//     price: '$8'
//   },
//   {
//     name: 'Jumbo',
//     brand: 'Clown',
//     pintsLeft: 124,
//     alcoholContent: 7,
//     price: '$10'
//   },
//   {
//     name: 'Drunko',
//     brand: 'Clown',
//     pintsLeft: 12,
//     alcoholContent: 25,
//     price: '$10'
//   },
//   {
//     name: 'Fruity IPA',
//     brand: 'Clown',
//     pintsLeft: 120,
//     alcoholContent: 6,
//     price: '$5'
//   }
// ]

export default function KegList(props) {

  const listStyle = {
    display: 'inline-flex',
    flexWrap: 'wrap',
    marginLeft: '0',
    marginRight: '0',
    float: 'center',
  }
  const kegStyle = {
    textAlign: 'center',
  }
  console.log(Object.keys(props.kegs));
  console.log(props.kegs[1]);
  Object.keys(props.kegs).map((kegKey, index) =>
    console.log(props.kegs[kegKey].name)
  )
  return(
    <div style={listStyle}>
      {Object.keys(props.kegs).map((kegKey, index) =>
        <KegCard style={kegStyle}
          name={props.kegs[kegKey].name}
          brand={props.kegs[kegKey].brand}
          pintsLeft={props.kegs[kegKey].pintsLeft}
          alcoholContent={props.kegs[kegKey].alcoholContent}
          price={props.kegs[kegKey].price}
          key={v4}
        />
      )}
    </div>
  )
}

KegList.propTypes = {
  kegs: PropTypes.object
}
