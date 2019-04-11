import React, { Component } from "react";
import AppHeader from '../components/AppHeader';
import { Container, Content, Button, Left, Right, Text, Body, Title, Icon, Header } from "native-base";

export default class HomeScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Home'
      };
  render() {
    return (
      <Container>
        <AppHeader pageTitle="Home" navigation={ this.props.navigation } />
        <Content>
          <Text>Welcome Home</Text>
        </Content>
      </Container>
    )
  }
}
