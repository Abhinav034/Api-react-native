import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/searchScreen'
const navigator = createStackNavigator({
  SearchScreen:SearchScreen
},{
  initialRouteName: "SearchScreen",
  defaultNavigationOptions:{
    title: "React Project"
  }
  
})
export default createAppContainer(navigator)

