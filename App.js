/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import ReduxThunk from 'redux-thunk';
import Router from './src/Router';

export default class App extends Component<{}> {

  componentWillMount()  {

      const config = {
          apiKey: "AIzaSyD19s_9MBZVC_I0abnFzqUzoDNWcY-N7-w",
          authDomain: "expensemanager-2a498.firebaseapp.com",
          databaseURL: "https://expensemanager-2a498.firebaseio.com",
          projectId: "expensemanager-2a498",
          storageBucket: "",
          messagingSenderId: "927382295340"
      };
      firebase.initializeApp(config);


  }

  render() {

        const store = createStore(reducers , {} , applyMiddleware (ReduxThunk));

        return (

            <Provider store={store}>
                <Router/>
            </Provider>

        );
  }
}
