import React, { Component } from "react";
import { Button, View, Text } from "react-native";

export default class HomeScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Home'
      };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
      </View>
    )
  }
}
