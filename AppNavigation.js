import React from 'react';
import { createDrawerNavigator, createAppContainer } from "react-navigation";

import LoginScreen from './src/screen/LoginScreen';
import HomeScreen from './src/screen/HomeScreen';
import ProfileScreen from './src/screen/ProfileScreen';

const AppNavigator = createDrawerNavigator({
    Login: { screen: LoginScreen },
    Home: { screen: HomeScreen},
    Profile: { screen: ProfileScreen},
    Logout: { screen: LoginScreen, navigationOptions: { drawerLabel: 'Log Out'}}
  },
  {
      initialRouteName: "Login"
  });
  
export default AppContainer = createAppContainer(AppNavigator);