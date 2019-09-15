import React from 'react'
import KegCard from './KegCard.jsx'

const kegs = [
  {
    name: 'Lager',
    brand: 'Clown',
    pintsLeft: 100,
    alcoholContent: 4,
    price: '$4'
  },
  {
    name: 'IPA',
    brand: 'Clown',
    pintsLeft: 72,
    alcoholContent: 7,
    price: '$5'
  },
  {
    name: 'Stout',
    brand: 'Clown',
    pintsLeft: 33,
    alcoholContent: 7,
    price: '$6'
  },
  {
    name: 'Porter',
    brand: 'Clown',
    pintsLeft: 124,
    alcoholContent: 5,
    price: '$5'
  },
  {
    name: 'Pale Ale',
    brand: 'Clown',
    pintsLeft: 6,
    alcoholContent: 5,
    price: '$5'
  },
  {
    name: 'Dumbo',
    brand: 'Clown',
    pintsLeft: 1,
    alcoholContent: 9,
    price: '$8'
  },
  {
    name: 'Jumbo',
    brand: 'Clown',
    pintsLeft: 124,
    alcoholContent: 7,
    price: '$10'
  },
  {
    name: 'Drunko',
    brand: 'Clown',
    pintsLeft: 12,
    alcoholContent: 25,
    price: '$10'
  },
  {
    name: 'Fruity IPA',
    brand: 'Clown',
    pintsLeft: 120,
    alcoholContent: 6,
    price: '$5'
  }
]

export default function KegList() {

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
  return(
    <div style={listStyle}>
      {kegs.map((keg, index) =>
        <KegCard style={kegStyle}
          name={keg.name}
          brand={keg.brand}
          pintsLeft={keg.pintsLeft}
          alcoholContent={keg.alcoholContent}
          price={keg.price}
          key={index}
        />
      )}
    </div>
  )
}