import React from 'react'
import KegCard from 'KegCard'

const kegs = [
  {
    name: 'Lager',
    brand: 'Clown',
    pintsLeft: '100',
    alcoholContent: '4',
    price: '$4.00'
  },
  {
    name: 'IPA',
    brand: 'Clown',
    pintsLeft: '72',
    alcoholContent: '7',
    price: '$5'
  },
  {
    name: 'Stout',
    brand: 'Clown',
    pintsLeft: '33',
    alcoholContent: '7',
    price: '$6'
  },
  {
    name: 'Porter',
    brand: 'Clown',
    pintsLeft: '124',
    alcoholContent: '5',
    price: '$5'
  },
  {
    name: 'Pale Ale',
    brand: 'Clown',
    pintsLeft: '6',
    alcoholContent: '5',
    price: '$5'
  },
  {
    name: 'Dumbo',
    brand: 'Clown',
    pintsLeft: '9',
    alcoholContent: '9',
    price: '$8'
  },
  {
    name: 'Jumbo',
    brand: 'Clown',
    pintsLeft: '124',
    alcoholContent: '7.5',
    price: '$10'
  },
  {
    name: 'Drunko',
    brand: 'Clown',
    pintsLeft: '12',
    alcoholContent: '25',
    price: '$10'
  },
  {
    name: 'Fruity IPA',
    brand: 'Clown',
    pintsLeft: '120',
    alcoholContent: '6.5',
    price: '$5'
  },
]

export default function KegList() {

  return(
    <div>
      {kegs.map((keg, index) =>
        <KegCard
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
