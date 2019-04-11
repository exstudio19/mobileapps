import React, { Component } from "react";
import { Button, View, Text } from "react-native";


export default class ProfileScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Profile'
      };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Profile Screen</Text>
      </View>
    )
  }
}
