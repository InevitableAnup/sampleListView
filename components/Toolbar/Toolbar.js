import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

const styles = require('../../style');
export default class Toolbar extends React.Component {
  
  render() {
    return (
      <View >
      <StatusBar
      backgroundColor="blue"
      barStyle="light-content"
      />
      <View style ={styles.navbar}>
      <Text style ={styles.navbarTitle}>
      {this.props.title}
      </Text>
      
      </View>
       
      </View>
    );
  }
}

