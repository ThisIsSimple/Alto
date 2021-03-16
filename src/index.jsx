import React from 'react';
import ReactDOM from 'react-dom';
import { CookiesProvider } from 'react-cookie';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { enableMapSet } from 'immer';

import reducer from './reducers';
import App from './App';
// import reportWebVitals from './reportWebVitals';

import './styles/global.scss';

enableMapSet();

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
  <CookiesProvider>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </CookiesProvider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
