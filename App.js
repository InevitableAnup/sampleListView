import React from "react";
import { StyleSheet, Text, View, StatusBar, ListView, TouchableHighlight } from "react-native";
import Toolbar from "./components/Toolbar/Toolbar";
import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCOVZpp4hQd9O1aNTMsXu9NOiCrUEzeltM",
  authDomain: "practicehigh-92e25.firebaseapp.com",
  databaseURL: "https://practicehigh-92e25.firebaseio.com",
  projectId: "practicehigh-92e25",
  storageBucket: "practicehigh-92e25.appspot.com",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const styles = require("./style");
export default class App extends React.Component {
  
  constructor(){
    super();

    let ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2});
    this.state ={

      itemDataSource: ds
    }

    this.itemsRef = this.getRef().child('items');

    this.renderRow = this.renderRow.bind(this);
    this.pressRow = this.pressRow.bind(this);
  }

  getRef(){
    return firebaseApp.database().ref();
  }

  componentWillMount() {
    this.getItems(this.itemsRef);
  }

  componentDidMount() {
   this.getItems(this.itemsRef);
  }

  getItems(itemsRef) {
    itemsRef.on('value',(snap) => {
      let items=[];
      snap.forEach((child) => {
        items.push({
          title: child.val().title,
          _key: child.key
        });
      });
      this.setState({
        itemDataSource: this.state.itemDataSource.cloneWithRows(items)
      });
    });

  
  }

  pressRow(item){
    console.log(item);
  }

  renderRow(item){
    return(
      <TouchableHighlight 
      onPress={() => {
        this.pressRow(item);
      }} >
      <View style={styles.li}>
      <Text style={styles.liText}>{item.title}</Text>
      </View>
      </TouchableHighlight>

    );
  }

  render() {
    return (
      <View>
        <Toolbar title="ItemLister" />
        <ListView
        dataSource={this.state.itemDataSource}
        renderRow={this.renderRow}
        />

      </View>
    );
  }
}
