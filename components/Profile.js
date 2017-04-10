import React, {Component} from 'react';
import { Container, Content, List, ListItem,Body,Right } from 'native-base';
import { View, Text } from 'react-native';

import styles from './styles';

class Profile extends Component{
    render(){
        return(
            <Container style={styles.container}>
                <Content style={styles.flex}>
                    <List>
                        <ListItem>
                            <Body>
                                <Text>Name</Text>
                            </Body>
                            <Right>
                                 <Text>Edit</Text>
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        )
    }
}

export default Profile;