import React, { Component} from 'react';
import { Header, Left, Button, Body, Title, Right, Icon } from 'native-base';

export default class AppHeader extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Header>
                <Left>
                    <Button 
                    onPress={ () => this.props.navigation.openDrawer()}
                    transparent>
                    <Icon name="menu" />
                    </Button>
                </Left>
                <Body>
                    <Title>{ this.props.pageTitle }</Title>
                </Body>
                <Right />
                </Header>
        )
    }
}