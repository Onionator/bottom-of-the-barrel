import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';

const root = document.getElementById('root');

serviceWorker.unregister();

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <HashRouter>
        <Component style={{ margin: 'auto' }}/>
      </HashRouter>
    </AppContainer>,
    root,
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => { render(App); });
}
