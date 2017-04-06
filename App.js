import React, {Component} from 'react';
import {View, Platform,  Navigator, Text, StatusBar} from 'react-native';
import Expo from 'expo'; 

import Login from './components/Login';
import Signup from './components/Signup';

export default class App extends Component {
  state = {
    isReady: false,
  }

  async componentWillMount() {
    if (Platform.OS === 'android') {
      await Expo.Font.loadAsync({
        'Roboto': require('native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      });
    }

    this.setState({isReady: true});
  }
  renderScene(route, navigator){
    console.log(route)
     switch(route.id){
       case 'signup':
         return <Signup navigator={navigator}/>
       default:
          return <Login navigator={navigator}/>
     }
  }
  render() {
    console.log(Platform)
    if (!this.state.isReady) {
      return <Expo.Components.AppLoading />;
    }
    return (
      <Navigator
          initialRoute={{id: 'login'}}
          renderScene={this.renderScene.bind(this)}
        />
    );
  }
}