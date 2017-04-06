import React, {Component} from 'react';
import { Container, Content, Form, Item, Input, Button } from 'native-base';
import { View, Text } from 'react-native';
import StatusBar from './StatusBar';

//import styles from './styles';

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

var styles = {
  flex: {
    flex: 1
  },
  container: {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    margin:10
  },
  button:{
      marginTop:20
  },
  text:{
      color:"#fff"
  }
}

export default Signup;