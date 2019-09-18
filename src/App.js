import React from 'react'
import Header from './components/Header'
import Body from './components/Body'
import KegCard from './components/KegCard'
import barrelBackground from './public/barrelBackground.jpg'
import { Switch, Route } from 'react-router-dom'
import AgeGate from './components/AgeGate'
import RockStevenson from './assets/RockStevenson.png'


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

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ageGateVisibleOnPage: true,
      rockStevensonNotVisibleOnPage: true,
      kegInfo: {
        name: null,
        brand: null,
        pintsLeft: null,
        alcoholContent: null,
        price: null
      }
    }
  }

  handleSellPint = () => {
    console.log('in handleSellPint');
    console.log(this.state.pintsLeft);
    console.log(this);
    console.log("end");
    this.setState({
      handleSellPint: this.state.pintsLeft - 1
    })
  }

  handleEditKeg = () => {
    let keg = this.state.kegInfo
    console.log("this keg: ", keg);
    // this.setState({
    //   kegInfo: null
    // })
  }

  handleAgeGateClickYes = () => {
    this.setState({
      ageGateVisibleOnPage: false
    })
  }

  handleAgeGateClickNo = () => {
    this.setState({
      rockStevensonNotVisibleOnPage: false
    })
  }

  render() {
    const appStyle = {
      // backgroundColor: '#2C2922',
      // backgroundImage: 'linear-gradient(to bottom right, #2C2922, #120C05)',
    }
    const bodyStyle = {
      margin: '0 auto 0 auto',
      width: '90vw',
    }
    const ageGateStyle = {
      border: '3px solid #CB9E7C',
      borderRadius: '40px',
      fontSize: '32px',
      height: '300px',
      margin: 'auto',
      paddingBottom: '40px',
      textAlign: 'center',
      width: '400px',
    }
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

    let currentlyVisibleContent = null;
    console.log(this.state.rockStevensonNotVisibleOnPage);
    if (this.state.rockStevensonNotVisibleOnPage) {
      if (this.state.ageGateVisibleOnPage) {
        currentlyVisibleContent = (
          <div className="App" style={appStyle}>
              <div style={ageGateStyle}>
                <AgeGate
                  onAgeGateClickYes={this.handleAgeGateClickYes}
                  onAgeGateClickNo={this.handleAgeGateClickNo} />
              </div>
          </div>
      )
      } else {
        currentlyVisibleContent = (
          <div className="App" style={appStyle}>
            <Header />
            <div style={bodyStyle}>
              <Body />
                (<div style={listStyle}>
                  {kegs.map((keg, index) =>
                    <KegCard style={kegStyle}
                      name={keg.name}
                      brand={keg.brand}
                      pintsLeft={keg.pintsLeft}
                      alcoholContent={keg.alcoholContent}
                      price={keg.price}
                      key={index}
                      onSellPint={this.handleSellPint}
                      onEditKeg={this.handleEditKeg}
                    />
                  )}
                </div>
              )
            </div>
          </div>
        )
      }
    } else {
      currentlyVisibleContent = (
        <div>
          <h1>You are too young to be here. Go away before Rock Stevenson is forced to throw you out.</h1>
          <img alt="Rock Stevenson" src={RockStevenson} />
        </div>
      )
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}
