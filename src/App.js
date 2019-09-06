import React from 'react'
import Header from './components/Header'
import Body from './components/Body'
import KegList from './components/KegList'
import barrelBackground from './public/barrelBackground.jpg'
import { Switch, Route } from 'react-router-dom';


export default function App() {
  const appStyle = {
    backgroundColor: '#2C2922',
    backgroundImage: 'linear-gradient(to bottom right, #2C2922, #120C05)',
    height: '100vh',
  }
  const bodyStyle = {
    margin: '0 auto 0 auto',
    maxWidth: '1400px',
    width: '90vw',
  }
  return (
    <div className="App" style={appStyle}>
        <Header />
        <div style={bodyStyle}>
          <Switch>
            <Route exact path='/' component={Body} />
            <Route exact path='/KegList' component={KegList} />
          </Switch>
        </div>
    </div>
  );
}
