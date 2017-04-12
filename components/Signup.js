import React, {Component} from 'react';
import { Container, Content, Form, Item, Input, Button, List, ListItem, Body,Right, Icon, Left } from 'native-base';
import { View, Text } from 'react-native';
import StatusBar from './StatusBar';
import {connect} from 'react-redux';

import {googleLogin} from './../actions';

import Expo from 'expo';

import styles from './styles';

class Signup extends Component{
    constructor(props){
        super(props);

        this.state ={
            email:"",
            password:""
        }

        this.onLogin=this.onLogin.bind(this);
        this.onGoogleSignup=this.onGoogleSignup.bind(this);
    }
    onLogin(){
        this.props.navigator.push({id: 'login'});
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.loggedIn) return this.props.navigator.push({id: 'home'});
    }
    onGoogleSignup(){
        console.log(this);
        Expo.Google.logInAsync({
            androidClientId:'143930606865-ak255b861i2s09vanf4vhf9qjaag5apt.apps.googleusercontent.com'
        })
        .then(result=>{
            console.log(this.props);
            if(result.type === 'success'){
                this.props.googleLogin(result.accessToken);
            }
        })
    }
    render(){
        return(
            <Container style={styles.container}>
                <StatusBar/>
                <Content style={styles.flex}>
                    <List>
                        <ListItem onPress={this.onGoogleSignup}>
                            <Body>
                                <Text>Signup with google</Text>
                            </Body>
                            <Right>
                                <Icon ios='logo-google' android='logo-google' style={{fontSize: 20, color: 'red'}}/>
                            </Right>
                        </ListItem>
                    </List>
                    <Form style={styles.form}>
                        <Item>
                            <Input 
                                placeholder="Email"
                                onChangeText={(email) => this.setState({email})}
                                value={this.state.email} />
                        </Item>
                        <Item>
                            <Input 
                                placeholder="Password" 
                                onChangeText={(password) => this.setState({password})}
                                secureTextEntry={true}
                                value={this.state.password}/>
                        </Item>
                        <Button block style={styles.button}>
                            <Text style={styles.text}>Register</Text>
                        </Button>
                        <Button dark transparent style={styles.button} onPress={this.onLogin}>
                            <Text>Already Registered? Login now</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        )
    }
}

function mapStateToProps(state){
    return state.auth;
}

export default connect(mapStateToProps,{googleLogin})(Signup);