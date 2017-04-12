import React, {Component} from 'react';
import {Platform,  Navigator, BackAndroid} from 'react-native';
import {Spinner} from 'native-base';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import Expo from 'expo'; 

import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';

const store = configureStore()

export default class App extends Component {
  state = {
    isReady: false,
  }

  componentDidMount(){
      BackAndroid.addEventListener('hardwareBackPress', () => {
          if (this.nav && this.nav.getCurrentRoutes().length > 1) {
              this.nav.pop();
              return true;
          }
          return false;
      });
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
       case 'login':
         return <Login navigator={navigator}/>
       case 'signup':
         return <Signup navigator={navigator}/>
       case 'home':
         return <Home navigator={navigator}/>
       default:
          return <Signup navigator={navigator}/>
     }
  }
  render() {
    if (!this.state.isReady) {
      return <Spinner color='blue' />;
    }
    return (
      <Provider store={store}>
        <Navigator
            ref={nav=>this.nav=nav}
            initialRoute={{id: 'signup'}}
            renderScene={this.renderScene.bind(this)} 
          />
        </Provider>
    );
  }
}