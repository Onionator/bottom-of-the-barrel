import React from 'react'
import Header from './components/Header'
import Body from './components/Body'
import KegList from './components/KegList'
import barrelBackground from './public/barrelBackground.jpg'
import { Switch, Route } from 'react-router-dom'
import AgeGate from './components/AgeGate'


export default function App() {


  const appStyle = {
    backgroundColor: '#2C2922',
    backgroundImage: 'linear-gradient(to bottom right, #2C2922, #120C05)',
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
  return (
    <div className="App" style={appStyle}>
        <Header />
        <div style={ageGateStyle}>
          <AgeGate />
        </div>
        <div style={bodyStyle}>
          <Body />
          <div>
            <KegList />
          </div>
        </div>
    </div>
  );
}
