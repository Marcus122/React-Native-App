import React, {Component} from 'react';
import { Container, Content, List, ListItem, Body } from 'native-base';
import { View, Text } from 'react-native';

import styles from './styles';

class Friends extends Component{
    render(){
        return(
            <Container style={styles.container}>
                <Content style={styles.flex}>
                    <List>
                        <ListItem>
                            <Body>
                                <Text>Friends list</Text>
                            </Body>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        )
    }
}

export default Friends;