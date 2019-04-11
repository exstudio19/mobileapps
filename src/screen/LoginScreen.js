import React, { Component } from 'react';
import { Container, Content, Header, Left, Right, Body, Title, Button, Text, Form, Item, Input} from 'native-base';

export default class LoginScreen extends Component {
    static navigationOptions = {
        drawerLabel: () => null,
        drawerLockMode: 'locked-open'
      };
    render() {
        return(
            <Container>
                <Header>
                    <Left />
                    <Body>
                        <Title>Login</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Form>
                        <Item>
                            <Input placeholder="Username" />
                        </Item>
                        <Item>
                            <Input placeholder="Password" />
                        </Item>
                        
                        <Button 
                        onPress={() => this.props.navigation.navigate('Home')}
                        Success><Text>Login</Text></Button>
                    </Form>
                </Content>
            </Container>
        )
    }
}