import React, {Component} from 'react';
import { Container, Content, Form, Item, Input, Button, List, ListItem, Body } from 'native-base';
import { View, Text } from 'react-native';
import StatusBar from './StatusBar';

import GoogleSignIn from 'react-native-google-sign-in';

import styles from './styles';

class Signup extends Component{
    constructor(props){
        super(props);

        this.state ={
            email:"",
            password:""
        }

        this.onLogin=this.onLogin.bind(this);
    }
    onLogin(){
        this.props.navigator.push({id: 'signup'});
    }
    onGoogleSignup(){
        GoogleSignIn.signInPromise();
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
                        <Button dark transparent style={styles.button}>
                            <Text>Already Registered? Login now</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        )
    }
}

export default Signup;