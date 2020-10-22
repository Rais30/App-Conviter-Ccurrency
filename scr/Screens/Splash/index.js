import React, {Component} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';

export class Splash extends Component {
  render() {
    setTimeout(() => {
      this.props.navigation.replace('Home');
    }, 3000);
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
        <Text style={{fontSize:35,fontWeight:'bold'}}> ConverrteCurrency </Text>
        <ActivityIndicator color="#0A9EBE" size="large"/>
      </View>
      
    );
  }
}

export default Splash;
