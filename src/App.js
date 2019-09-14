import React from 'react'
import Header from './components/Header'
import Body from './components/Body'
import KegList from './components/KegList'
import barrelBackground from './public/barrelBackground.jpg'
import { Switch, Route } from 'react-router-dom'
import AgeGate from './components/AgeGate'
import RockStevenson from './assets/RockStevenson.png'


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ageGateVisibleOnPage: true,
      rockStevensonVisibleOnPage: false
    }
  }
  handleAgeGateClick = () => {
    this.setState({
      ageGateVisibleOnPage: false
    })
  }
  handleAgeGateClickNo = () => {
    this.setState({
      rockStevensonVisibleOnPage: true
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
      margin: '20px auto 20px auto',
      paddingBottom: '40px',
      textAlign: 'center',
      width: '400px',
    }
    let currentlyVisibleContent = null;
    console.log(this.rockStevensonVisibleOnPage);
    if (this.rockStevensonVisibleOnPage) {
      if (this.state.ageGateVisibleOnPage) {
        currentlyVisibleContent = (
          <div className="App" style={appStyle}>
              <div style={ageGateStyle}>
                <AgeGate onAgeGateClickYes={this.handleAgeGateClickYes}
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
                <div>
                  <KegList />
                </div>
              </div>
          </div>
        )
      }
    } else {
      currentlyVisibleContent = (
        <div>
          <h1>You are too young to be here. Go away before Rock Stevenson is forced to throw you out.</h1>
          <img alt="Rock Stevenson Picture" src={RockStevenson} />
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
