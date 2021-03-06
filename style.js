"use strict";
let React = require("react-native");
let { StyleSheet } = React;
const constants = {
  actionColor: "#3cb371"
};

module.exports = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    flex: 1
  },
  listview:{

    flex:1,
  },
  li:{

    backgroundColor: '#fff',
    borderBottomColor:'#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16,
  },
  liContainer:{
      flex:2,
  },
  liText:{
      color: '#333',
      fontSize: 16,
  },
  navbar: {
    alignItems: "center",
    backgroundColor: "blue",
    borderBottomColor: "white",
    borderColor: "transparent",
    borderWidth: 1,
    justifyContent: "center",
    height: 44,
    flexDirection: "row"
  },
  navbarTitle: {
    color: "#444",
    fontSize: 16,
    fontWeight: "500"
  },
  toolbar: {
    backgroundColor: "green",
    height: 22
  }
});
