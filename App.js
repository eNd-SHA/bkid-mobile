import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import AppNavigator from './src/AppNavigator'
import SplashScreen from 'react-native-splash-screen'

export default class App extends Component {

  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <AppNavigator/>
    );
  }
}