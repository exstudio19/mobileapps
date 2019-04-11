import React, { Component } from "react";
import AppHeader from '../components/AppHeader';
import { Container, Content, Button, Left, Right, Text, Body, Title, Icon, Header } from "native-base";


export default class ProfileScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Profile'
      };
  render() {
    return (
      
      <Container>
        <AppHeader pageTitle="Profile" navigation={this.props.navigation} />
        <Content>
          <Text>Profile Page</Text>
        </Content>
      </Container>
    )
  }
}
