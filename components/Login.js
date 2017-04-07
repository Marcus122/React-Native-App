import React, {Component} from 'react';
import { Container, Content, Form, Item, Input, Button, Toast } from 'native-base';
import { View, Text } from 'react-native';
import StatusBar from './StatusBar';
import {connect} from 'react-redux';

import {login} from './../actions';

console.log(login)

import styles from './styles';

class Login extends Component{
    constructor(props){
        super(props);

        this.state ={
            email:"",
            password:""
        }

        this.onSignup=this.onSignup.bind(this);
        this.onLogin=this.onLogin.bind(this);
    }
    onLogin(){
        this.props.login(this.state.email,this.state.password);
    }
    onSignup(){
        this.props.navigator.push({id: 'signup'});
    }
    componentWillReceiveProps(nextProps){
         console.log("nextProps",nextProps)
        if(nextProps.loggedIn) return this.props.navigator.push({id: 'home'});
    }
    render(){
        return(
            <Container style={styles.container}>
                <StatusBar/>
                <Content style={styles.flex}>
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
                        <Button block style={styles.button} onPress={this.onLogin}>
                            <Text style={styles.text}>Login</Text>
                        </Button>
                        <Button dark transparent style={styles.button} onPress={this.onSignup}>
                            <Text>Not Registered? Sign up Now</Text>
                        </Button>
                        {this.props.error ? <Text>Logging in failed</Text> : null}
                    </Form>
                </Content>
            </Container>
        )
    }
}

function mapStateToProps(state){
    return state.auth;
}

export default connect(mapStateToProps,{login})(Login);