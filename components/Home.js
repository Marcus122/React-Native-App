import React, {Component} from 'react';
import { Container, Content, Form, Item, Input, Button } from 'native-base';
import { View, Text } from 'react-native';
import StatusBar from './StatusBar';

import styles from './styles';

class Home extends Component{
    render(){
        return(
            <Container style={styles.container}>
                <StatusBar/>
                <Content style={styles.flex}>
                    <Text>Logged In</Text>
                </Content>
            </Container>
        )
    }
}

export default Home;