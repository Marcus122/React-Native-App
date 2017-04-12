import React, {Component} from 'react';
import { Container, Header, Content, List, ListItem, Body,InputGroup,Icon,Input,Button } from 'native-base';
import { View, Text } from 'react-native';
import {connect} from 'react-redux';

import styles from './styles';

class Friends extends Component{
    componentWillMount(){
        console.log(this.props);
    }
    render(){
        return(
            <Container style={styles.container}>
                <Content style={styles.flex}>
                    <View>
                        <InputGroup>
                            <Icon name="ios-search" />
                            <Input placeholder="Search" />
                            <Icon name="ios-people" />
                        </InputGroup>
                    </View>
                    <Text>{this.props.displayName}</Text>
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

function mapStateToProps(state){
    return state.user;
}

export default connect(mapStateToProps)(Friends);