import React from 'react';
import { StatusBar,View } from 'react-native';

export default () => {
    return (
        <View
        style={{
            height: StatusBar.currentHeight,
            backgroundColor: "#512DA8",
        }}
        /> 
    )
}