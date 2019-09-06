import React from 'react'
import Header from './components/Header'
import Body from './components/Body'
import barrelBackground from './public/barrelBackground.jpg'


export default function App() {
  const appStyle = {
    backgroundColor: '#2C2922',
    backgroundImage: 'linear-gradient(to bottom right, #2C2922, #120C05)',
    height: '100vh',
  }
  return (
    <div className="App" style={appStyle}>
        <Header />
        <Body />
    </div>
  );
}
