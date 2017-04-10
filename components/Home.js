import React, {Component} from 'react';
import { Container, Content, Form, Item, Input, Button, Tabs, Tab } from 'native-base';
import { View, Text } from 'react-native';
import StatusBar from './StatusBar';
import Profile from './Profile';
import Friends from './Friends';

import styles from './styles';

class Home extends Component{
    render(){
        return(
            <Container>
                <StatusBar/>
                <Content style={styles.flex}>
                    <Tabs>
                        <Tab heading="Friends">
                            <Friends />
                        </Tab>
                        <Tab heading="Profile">
                            <Profile />
                        </Tab>
                    </Tabs>
                </Content>
            </Container>
        )
    }
}

export default Home;