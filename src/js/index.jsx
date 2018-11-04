import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';
import store from './rootStore';

// import { createStore, applyMiddleware, compose } from 'redux';
// import rootReducer from './rootReducer';
// import promiseMiddleware from 'redux-promise-middleware';
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(rootReducer, composeEnhancers(
//   applyMiddleware(
//     promiseMiddleware()
//   )
// ));

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
